import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import {
  FaTimes,
  FaClipboardList,
  FaSignOutAlt,
  FaRedo,
  FaMapMarkerAlt,
  FaTrash,
  FaPen,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import {
  CUSTOMER_ME_URL,
  CUSTOMER_ORDERS_URL,
  CUSTOMER_ADDRESSES_URL,
  CUSTOMER_ADDRESS_URL,
  CUSTOMER_REGISTER_URL,
  CUSTOMER_SIGNIN_URL,
  CUSTOMER_WISHLIST_URL,
  CUSTOMER_WISHLIST_PRODUCT_URL,
  GET_ONEPRODUCT_URL,
} from "../../apis/URLs";
import { addToCart } from "../../redux/cart/cartActions";
import {
  getCustomerAccessToken,
  setCustomerAccessToken,
  clearCustomerAccessToken,
} from "../../utilities/customerAuthStorage";
import {
  PrimaryButton,
  TextLinkButton,
  AccountIconWrap,
  AccountIconsCluster,
  AccountIconButton,
  WishlistAccountIconButton,
  UserMenuDropdown,
  UserMenuHeader,
  UserMenuName,
  UserMenuEmail,
  UserMenuBody,
  UserMenuItem,
  Overlay,
  ModalCard,
  ModalAccentBar,
  ModalCloseGhost,
  ModalHero,
  ModalTitle,
  ModalSubtitle,
  TabSegmentWrap,
  TabSegmentBtn,
  Form,
  FieldGroup,
  Label,
  Input,
  ErrorText,
  ModalFooter,
  DrawerCard,
  DrawerHeader,
  DrawerTitleBlock,
  DrawerTitle,
  DrawerSubtitle,
  CloseBtn,
  OrderList,
  OrderCard,
  OrderMeta,
  OrderId,
  OrderDate,
  OrderFooter,
  OrderTotal,
  StatusBadge,
  EmptyOrders,
  LoadingOrders,
  OrderLines,
  OrderLine,
  OrderLineName,
  OrderLineQty,
  OrderActions,
  ReorderButton,
  DrawerTabs,
  OrderMetaExtra,
  OrderTypePill,
  AddressCard,
  AddressLabelRow,
  AddressBody,
  AddressToolbar,
  SmallGhostBtn,
  DangerMiniBtn,
  AddAddressButton,
  AddressFormWrap,
  CheckboxRow,
  CheckboxLabel,
  TextAreaField,
} from "./styles";

function getDiscountedUnitPrice(product) {
  if (!product) return 0;
  const base = parseFloat(product.en_price) || 0;
  const catDisc = parseFloat(product?.category?.discount) || 0;
  const prodDisc = parseFloat(product?.discount) || 0;
  const finalDiscount = catDisc === 0 ? prodDisc : catDisc;
  return base * (1 - finalDiscount / 100);
}

function normalizeOrderLineItems(raw) {
  if (!raw) return [];
  const arr = Array.isArray(raw) ? raw : [];
  return arr
    .map((line) => {
      const productId = line.product_id ?? line.productId ?? line.id;
      return {
        product_id: productId,
        quantity: Math.max(1, Number(line.quantity) || 1),
        form_data: line.form_data ?? line.formData ?? {},
        instruction: line.instruction ?? "",
      };
    })
    .filter((x) => x.product_id != null);
}

function lineDisplayName(line, activeLanguage) {
  const name =
    line.product_name ||
    line.product_details?.en_name ||
    line.product_details?.ar_name;
  if (name) return name;
  return activeLanguage === "ar" ? `منتج #${line.product_id}` : `Item #${line.product_id}`;
}

function productWishlistName(product, activeLanguage) {
  if (!product) return "";
  const n =
    activeLanguage === "ar"
      ? product.ar_name || product.en_name
      : product.en_name || product.ar_name;
  return n || `#${product.id}`;
}

function statusBadgeProps(status) {
  const s = String(status || "").toLowerCase();
  if (s === "completed") return { $bg: "#dcfce7", $fg: "#166534" };
  if (s === "cancelled" || s === "canceled")
    return { $bg: "#fee2e2", $fg: "#b91c1c" };
  if (s === "confirmed" || s === "preparing" || s === "ready")
    return { $bg: "#dbeafe", $fg: "#1d4ed8" };
  if (s === "pending") return { $bg: "#ffedd5", $fg: "#c2410c" };
  return { $bg: "#f1f5f9", $fg: "#475569" };
}

const CustomerAccountNav = forwardRef(function CustomerAccountNav(
  { restaurant, restaurantName, activeLanguage = "en", popupHandler },
  ref
) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [authTab, setAuthTab] = useState("signin");
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regName, setRegName] = useState("");
  const [ordersError, setOrdersError] = useState("");
  const [reorderBusyId, setReorderBusyId] = useState(null);
  const [drawerTab, setDrawerTab] = useState("orders");
  const [addressSubView, setAddressSubView] = useState("list");
  const [addresses, setAddresses] = useState([]);
  const [addressesLoading, setAddressesLoading] = useState(false);
  const [addressSaveError, setAddressSaveError] = useState("");
  const [addressSaving, setAddressSaving] = useState(false);
  const [addressForm, setAddressForm] = useState({
    label: "",
    full_address: "",
    is_default: false,
  });
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [wishlistError, setWishlistError] = useState("");
  const [wishlistCartBusyId, setWishlistCartBusyId] = useState(null);

  const dispatch = useDispatch();
  const iconWrapRef = useRef(null);
  const t = (en, ar) => (activeLanguage === "ar" ? ar : en);
  const token = getCustomerAccessToken(restaurantName);
  const restaurantId = restaurant?.id;
  const isRtl = activeLanguage === "ar";

  const closePopups = useCallback(() => {
    if (popupHandler) popupHandler(null);
  }, [popupHandler]);

  const loadProfile = useCallback(async () => {
    if (!token || !restaurantId) {
      setProfile(null);
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.get(CUSTOMER_ME_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(data);
    } catch {
      setProfile(null);
      clearCustomerAccessToken(restaurantName);
    } finally {
      setLoading(false);
    }
  }, [token, restaurantId, restaurantName]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    if (!authOpen && !ordersOpen && !wishlistOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, [authOpen, ordersOpen, wishlistOpen]);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (!userMenuOpen) return;
      if (iconWrapRef.current && !iconWrapRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [userMenuOpen]);

  const loadOrders = useCallback(async () => {
    if (!token) return;
    setOrdersLoading(true);
    try {
      const { data } = await axios.get(CUSTOMER_ORDERS_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(data.orders || []);
    } catch {
      setOrders([]);
    } finally {
      setOrdersLoading(false);
    }
  }, [token]);

  const loadAddresses = useCallback(async () => {
    if (!token) return;
    setAddressesLoading(true);
    try {
      const { data } = await axios.get(CUSTOMER_ADDRESSES_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(data.addresses || []);
    } catch {
      setAddresses([]);
    } finally {
      setAddressesLoading(false);
    }
  }, [token]);

  const loadWishlist = useCallback(async () => {
    if (!token) return;
    setWishlistLoading(true);
    try {
      const { data } = await axios.get(CUSTOMER_WISHLIST_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlistItems(Array.isArray(data) ? data : []);
    } catch {
      setWishlistItems([]);
      setWishlistError(
        activeLanguage === "ar"
          ? "تعذر تحميل المفضلة."
          : "Could not load wishlist."
      );
    } finally {
      setWishlistLoading(false);
    }
  }, [token, activeLanguage]);

  const openWishlistPanel = useCallback(() => {
    closePopups();
    setWishlistError("");
    setWishlistOpen(true);
    loadWishlist();
  }, [closePopups, loadWishlist]);

  const openOrders = useCallback(() => {
    closePopups();
    setOrdersError("");
    setDrawerTab("orders");
    setOrdersOpen(true);
    loadOrders();
  }, [closePopups, loadOrders]);

  const openAddresses = useCallback(() => {
    closePopups();
    setAddressSaveError("");
    setAddressSubView("list");
    setEditingAddressId(null);
    setAddressForm({ label: "", full_address: "", is_default: false });
    setDrawerTab("addresses");
    setOrdersOpen(true);
    loadAddresses();
  }, [closePopups, loadAddresses]);

  const handleNavbarOrdersClick = useCallback(() => {
    closePopups();
    if (loading) return;
    setUserMenuOpen(false);
    if (profile) {
      openOrders();
      return;
    }
    setAuthTab("signin");
    setFormError("");
    setAuthOpen(true);
  }, [closePopups, loading, profile, openOrders]);

  const handleNavbarWishlistClick = useCallback(() => {
    closePopups();
    if (loading) return;
    setUserMenuOpen(false);
    if (profile) {
      openWishlistPanel();
      return;
    }
    setAuthTab("signin");
    setFormError("");
    setAuthOpen(true);
  }, [closePopups, loading, profile, openWishlistPanel]);

  useImperativeHandle(
    ref,
    () => ({
      openOrders: () => handleNavbarOrdersClick(),
      openWishlist: () => handleNavbarWishlistClick(),
    }),
    [handleNavbarOrdersClick, handleNavbarWishlistClick]
  );

  const handleReorder = async (orderRow) => {
    setOrdersError("");
    const lines = normalizeOrderLineItems(orderRow.items);
    if (lines.length === 0) {
      setOrdersError(
        t(
          "This order has no saved line items. Only newer orders can be reordered.",
          "لا توجد أصناف محفوظة لهذا الطلب."
        )
      );
      return;
    }
    setReorderBusyId(orderRow.id);
    try {
      for (const line of lines) {
        const { data: product } = await axios.get(GET_ONEPRODUCT_URL(line.product_id));
        const price = getDiscountedUnitPrice(product);
        dispatch(
          addToCart(
            restaurantName,
            product,
            line.quantity,
            line.form_data || {},
            price,
            line.instruction || ""
          )
        );
      }
      setOrdersOpen(false);
      if (popupHandler) popupHandler("cart");
    } catch {
      setOrdersError(
        t(
          "Could not add items. A product may have been removed from the menu.",
          "تعذر إضافة الأصناف. قد يكون أحد المنتجات غير متوفر."
        )
      );
    } finally {
      setReorderBusyId(null);
    }
  };

  const removeWishlistItem = async (productId) => {
    if (!token || !productId) return;
    setWishlistError("");
    try {
      await axios.delete(CUSTOMER_WISHLIST_PRODUCT_URL(productId), {
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadWishlist();
    } catch {
      setWishlistError(
        t(
          "Could not remove from wishlist.",
          "تعذر الإزالة من المفضلة."
        )
      );
    }
  };

  const addWishlistProductToCart = async (row) => {
    if (!row?.id) return;
    setWishlistError("");
    setWishlistCartBusyId(row.id);
    try {
      const { data: product } = await axios.get(GET_ONEPRODUCT_URL(row.id));
      const price = getDiscountedUnitPrice(product);
      dispatch(
        addToCart(restaurantName, product, 1, {}, price, "")
      );
      if (popupHandler) popupHandler("cart");
    } catch {
      setWishlistError(
        t(
          "Could not add item. It may no longer be available.",
          "تعذر إضافة الصنف. قد لا يكون متوفراً."
        )
      );
    } finally {
      setWishlistCartBusyId(null);
    }
  };

  const handleIconClick = () => {
    if (loading) return;
    closePopups();
    if (profile) {
      setUserMenuOpen((v) => !v);
      return;
    }
    setUserMenuOpen(false);
    setAuthTab("signin");
    setFormError("");
    setAuthOpen(true);
  };

  const handleOrdersFromMenu = () => {
    setUserMenuOpen(false);
    openOrders();
  };

  const handleAddressesFromMenu = () => {
    setUserMenuOpen(false);
    openAddresses();
  };

  const startNewAddress = () => {
    setAddressSaveError("");
    setEditingAddressId(null);
    setAddressForm({ label: "", full_address: "", is_default: false });
    setAddressSubView("edit");
  };

  const startEditAddress = (row) => {
    setAddressSaveError("");
    setEditingAddressId(row.id);
    setAddressForm({
      label: row.label || "",
      full_address: row.full_address || "",
      is_default: !!row.is_default,
    });
    setAddressSubView("edit");
  };

  const cancelAddressEdit = () => {
    setAddressSaveError("");
    setAddressSubView("list");
    setEditingAddressId(null);
  };

  const saveAddress = async (e) => {
    e?.preventDefault?.();
    if (!token) return;
    const fa = String(addressForm.full_address || "").trim();
    if (!fa) {
      setAddressSaveError(
        t("Address is required.", "العنوان مطلوب.")
      );
      return;
    }
    setAddressSaving(true);
    setAddressSaveError("");
    try {
      if (editingAddressId) {
        await axios.put(
          CUSTOMER_ADDRESS_URL(editingAddressId),
          {
            label: String(addressForm.label || "").trim() || null,
            full_address: fa,
            is_default: !!addressForm.is_default,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(
          CUSTOMER_ADDRESSES_URL,
          {
            label: String(addressForm.label || "").trim() || null,
            full_address: fa,
            is_default: !!addressForm.is_default,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      await loadAddresses();
      setAddressSubView("list");
      setEditingAddressId(null);
    } catch (err) {
      setAddressSaveError(
        err.response?.data?.message ||
          t("Could not save address.", "تعذر حفظ العنوان.")
      );
    } finally {
      setAddressSaving(false);
    }
  };

  const deleteAddress = async (id) => {
    if (!token || !id) return;
    if (
      typeof window !== "undefined" &&
      !window.confirm(
        t("Delete this address?", "حذف هذا العنوان؟")
      )
    ) {
      return;
    }
    setAddressSaveError("");
    try {
      await axios.delete(CUSTOMER_ADDRESS_URL(id), {
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadAddresses();
    } catch (err) {
      setAddressSaveError(
        err.response?.data?.message ||
          t("Could not delete address.", "تعذر حذف العنوان.")
      );
    }
  };

  const setAddressAsDefault = async (id) => {
    if (!token || !id) return;
    setAddressSaveError("");
    try {
      await axios.put(
        CUSTOMER_ADDRESS_URL(id),
        { is_default: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await loadAddresses();
    } catch (err) {
      setAddressSaveError(
        err.response?.data?.message ||
          t("Could not update default.", "تعذر تعيين الافتراضي.")
      );
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!restaurantId) return;
    try {
      const { data } = await axios.post(CUSTOMER_SIGNIN_URL, {
        restaurant_id: restaurantId,
        email: signInEmail.trim(),
        password: signInPassword,
      });
      setCustomerAccessToken(restaurantName, data.accessToken);
      setAuthOpen(false);
      setSignInPassword("");
      await loadProfile();
    } catch (err) {
      setFormError(
        err.response?.data?.message ||
          t("Sign in failed. Check your email and password.", "فشل تسجيل الدخول.")
      );
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!restaurantId) return;
    if (regPassword !== regConfirmPassword) {
      setFormError(
        t("Passwords do not match.", "كلمتا المرور غير متطابقتين.")
      );
      return;
    }
    try {
      await axios.post(CUSTOMER_REGISTER_URL, {
        restaurant_id: restaurantId,
        email: regEmail.trim(),
        password: regPassword,
        phone_number: regPhone.trim(),
        full_name: regName.trim(),
      });
      const { data } = await axios.post(CUSTOMER_SIGNIN_URL, {
        restaurant_id: restaurantId,
        email: regEmail.trim(),
        password: regPassword,
      });
      setCustomerAccessToken(restaurantName, data.accessToken);
      setAuthOpen(false);
      setRegPassword("");
      setRegConfirmPassword("");
      await loadProfile();
    } catch (err) {
      setFormError(
        err.response?.data?.message ||
          t("Registration failed. Try a different email or phone.", "فشل إنشاء الحساب.")
      );
    }
  };

  const handleLogout = () => {
    clearCustomerAccessToken(restaurantName);
    setProfile(null);
    setOrders([]);
    setWishlistItems([]);
    setWishlistOpen(false);
    setUserMenuOpen(false);
  };

  const formatDate = (d) => {
    if (!d) return "";
    try {
      return new Date(d).toLocaleString(activeLanguage === "ar" ? "ar-LB" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    } catch {
      return String(d);
    }
  };

  const displayName = profile?.full_name || profile?.email;
  const displayEmail = profile?.email && profile?.full_name ? profile.email : null;

  const portalEl =
    typeof document !== "undefined" ? document.body : null;

  return (
    <>
      <AccountIconsCluster dir={isRtl ? "rtl" : "ltr"}>
        <AccountIconWrap ref={iconWrapRef}>
          <AccountIconButton
            type="button"
            onClick={handleIconClick}
            aria-label={t("Account", "الحساب")}
            aria-expanded={userMenuOpen}
          >
            <IoPersonOutline />
          </AccountIconButton>
          {userMenuOpen && profile && (
            <UserMenuDropdown $rtl={isRtl} dir={isRtl ? "rtl" : "ltr"}>
              <UserMenuHeader>
                <UserMenuName>{displayName}</UserMenuName>
                {displayEmail && <UserMenuEmail>{displayEmail}</UserMenuEmail>}
              </UserMenuHeader>
              <UserMenuBody>
                <UserMenuItem type="button" $rtl={isRtl} onClick={handleOrdersFromMenu}>
                  <FaClipboardList aria-hidden />
                  {t("My orders", "طلباتي")}
                </UserMenuItem>
                <UserMenuItem
                  type="button"
                  $rtl={isRtl}
                  data-outline-wishlist-heart="true"
                  onClick={() => {
                    setUserMenuOpen(false);
                    openWishlistPanel();
                  }}
                >
                  <IoHeartOutline aria-hidden />
                  {t("Wishlist", "المفضلة")}
                </UserMenuItem>
                <UserMenuItem type="button" $rtl={isRtl} onClick={handleAddressesFromMenu}>
                  <FaMapMarkerAlt aria-hidden />
                  {t("Addresses", "العناوين")}
                </UserMenuItem>
                <UserMenuItem type="button" $rtl={isRtl} $danger onClick={handleLogout}>
                  <FaSignOutAlt aria-hidden />
                  {t("Log out", "خروج")}
                </UserMenuItem>
              </UserMenuBody>
            </UserMenuDropdown>
          )}
        </AccountIconWrap>
        {profile && (
          <WishlistAccountIconButton
            type="button"
            onClick={() => {
              if (loading) return;
              setUserMenuOpen(false);
              openWishlistPanel();
            }}
            aria-label={t("Wishlist", "المفضلة")}
          >
            <IoHeartOutline />
          </WishlistAccountIconButton>
        )}
      </AccountIconsCluster>

      {authOpen &&
        portalEl &&
        createPortal(
          <Overlay
            onClick={() => setAuthOpen(false)}
            role="presentation"
          >
            <ModalCard
              onClick={(e) => e.stopPropagation()}
              dir={isRtl ? "rtl" : "ltr"}
            >
              <ModalAccentBar />
              <ModalCloseGhost
                type="button"
                $rtl={isRtl}
                onClick={() => setAuthOpen(false)}
                aria-label={t("Close", "إغلاق")}
              >
                <FaTimes />
              </ModalCloseGhost>

              <ModalHero $rtl={isRtl}>
                <ModalTitle>
                  {authTab === "signin"
                    ? t("Welcome back", "مرحباً بعودتك")
                    : t("Create your account", "أنشئ حسابك")}
                </ModalTitle>
                <ModalSubtitle>
                  {authTab === "signin"
                    ? t(
                        "Sign in to view order history and speed up checkout.",
                        "سجّل الدخول لعرض طلباتك وتسريع إتمام الطلب."
                      )
                    : t(
                        "Register with email and phone to track your orders.",
                        "سجّل بريدك وهاتفك لتتبع طلباتك."
                      )}
                </ModalSubtitle>
              </ModalHero>

              <TabSegmentWrap>
                <TabSegmentBtn
                  type="button"
                  $active={authTab === "signin"}
                  onClick={() => {
                    setAuthTab("signin");
                    setFormError("");
                    setRegConfirmPassword("");
                  }}
                >
                  {t("Sign in", "تسجيل الدخول")}
                </TabSegmentBtn>
                <TabSegmentBtn
                  type="button"
                  $active={authTab === "register"}
                  onClick={() => {
                    setAuthTab("register");
                    setFormError("");
                    setRegConfirmPassword("");
                  }}
                >
                  {t("Register", "إنشاء حساب")}
                </TabSegmentBtn>
              </TabSegmentWrap>

              {authTab === "signin" ? (
                <Form onSubmit={handleSignIn}>
                  <FieldGroup>
                    <Label>{t("Email", "البريد الإلكتروني")}</Label>
                    <Input
                      type="email"
                      autoComplete="email"
                      value={signInEmail}
                      onChange={(e) => setSignInEmail(e.target.value)}
                      required
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Password", "كلمة المرور")}</Label>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      required
                    />
                  </FieldGroup>
                  {formError && <ErrorText>{formError}</ErrorText>}
                  <PrimaryButton type="submit">{t("Sign in", "تسجيل الدخول")}</PrimaryButton>
                </Form>
              ) : (
                <Form onSubmit={handleRegister}>
                  <FieldGroup>
                    <Label>{t("Full name", "الاسم الكامل")}</Label>
                    <Input
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      required
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Phone", "رقم الهاتف")}</Label>
                    <Input
                      type="tel"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      required
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Email", "البريد الإلكتروني")}</Label>
                    <Input
                      type="email"
                      autoComplete="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      required
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Password (8+ characters)", "كلمة المرور (٨ أحرف أو أكثر)")}</Label>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      minLength={8}
                      required
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Confirm password", "تأكيد كلمة المرور")}</Label>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      minLength={8}
                      required
                    />
                  </FieldGroup>
                  {formError && <ErrorText>{formError}</ErrorText>}
                  <PrimaryButton type="submit">{t("Create account", "إنشاء الحساب")}</PrimaryButton>
                </Form>
              )}

              <ModalFooter>
                <TextLinkButton type="button" onClick={() => setAuthOpen(false)}>
                  {t("Cancel", "إلغاء")}
                </TextLinkButton>
              </ModalFooter>
            </ModalCard>
          </Overlay>,
          portalEl
        )}

      {ordersOpen &&
        portalEl &&
        createPortal(
          <>
            <Overlay
              onClick={() => {
                setOrdersError("");
                setOrdersOpen(false);
              }}
            />
            <DrawerCard $rtl={isRtl} dir={isRtl ? "rtl" : "ltr"}>
            <DrawerHeader>
              <DrawerTitleBlock>
                <DrawerTitle>
                  {drawerTab === "orders"
                    ? t("My orders", "طلباتي")
                    : addressSubView === "edit"
                    ? editingAddressId
                      ? t("Edit address", "تعديل العنوان")
                      : t("New address", "عنوان جديد")
                    : t("Delivery addresses", "عناوين التوصيل")}
                </DrawerTitle>
                <DrawerSubtitle>
                  {drawerTab === "orders"
                    ? t(
                        "Signed-in orders for this restaurant. Reorder adds items to your cart.",
                        "طلباتك في هذا المطعم. إعادة الطلب تضيف الأصناف إلى السلة."
                      )
                    : addressSubView === "edit"
                    ? t(
                        "Save a label and full address. One can be default for checkout.",
                        "احفظ اسماً للعنوان والنص الكامل. يمكن جعل عنوان افتراضياً عند الطلب."
                      )
                    : t(
                        "Manage multiple delivery addresses for checkout.",
                        "أدِر عدة عناوين للتوصيل عند الطلب."
                      )}
                </DrawerSubtitle>
              </DrawerTitleBlock>
              <CloseBtn
                type="button"
                onClick={() => {
                  setOrdersError("");
                  setAddressSaveError("");
                  setOrdersOpen(false);
                }}
                aria-label="Close"
              >
                <FaTimes />
              </CloseBtn>
            </DrawerHeader>
            {drawerTab === "addresses" && addressSubView === "edit" && (
              <div style={{ padding: "0 20px 8px" }}>
                <TextLinkButton
                  type="button"
                  style={{ textAlign: isRtl ? "right" : "left", width: "auto", padding: "8px 0" }}
                  onClick={cancelAddressEdit}
                >
                  <FaArrowLeft
                    style={{
                      marginRight: isRtl ? 0 : 8,
                      marginLeft: isRtl ? 8 : 0,
                      transform: isRtl ? "rotate(180deg)" : "none",
                    }}
                  />
                  {t("Back to list", "العودة للقائمة")}
                </TextLinkButton>
              </div>
            )}
            <DrawerTabs>
              <TabSegmentWrap style={{ margin: 0 }}>
                <TabSegmentBtn
                  type="button"
                  $active={drawerTab === "orders"}
                  onClick={() => {
                    setDrawerTab("orders");
                    loadOrders();
                  }}
                >
                  {t("Orders", "الطلبات")}
                </TabSegmentBtn>
                <TabSegmentBtn
                  type="button"
                  $active={drawerTab === "addresses"}
                  onClick={() => {
                    setDrawerTab("addresses");
                    setAddressSubView("list");
                    loadAddresses();
                  }}
                >
                  {t("Addresses", "العناوين")}
                </TabSegmentBtn>
              </TabSegmentWrap>
            </DrawerTabs>
            {drawerTab === "orders" && ordersError && (
              <div style={{ padding: "0 20px 12px" }}>
                <ErrorText>{ordersError}</ErrorText>
              </div>
            )}
            {drawerTab === "addresses" && addressSaveError && (
              <div style={{ padding: "0 20px 12px" }}>
                <ErrorText>{addressSaveError}</ErrorText>
              </div>
            )}
            {drawerTab === "orders" && (
            <OrderList>
              {ordersLoading ? (
                <LoadingOrders>{t("Loading…", "جاري التحميل…")}</LoadingOrders>
              ) : orders.length === 0 ? (
                <EmptyOrders>
                  {t(
                    "You have no orders yet. Complete a checkout while signed in to see them here.",
                    "لا توجد طلبات بعد. أنهِ طلباً وأنت مسجّل الدخول لتظهر هنا."
                  )}
                </EmptyOrders>
              ) : (
                orders.map((o) => {
                  const rawItems = Array.isArray(o.items) ? o.items : [];
                  return (
                    <OrderCard key={o.id}>
                      <OrderMeta>
                        <OrderId>#{o.id}</OrderId>
                        <OrderDate>{formatDate(o.order_date)}</OrderDate>
                      </OrderMeta>
                      {(o.delivery_type || o.customer_address) && (
                        <OrderMetaExtra>
                          {o.delivery_type && (
                            <OrderTypePill>{o.delivery_type}</OrderTypePill>
                          )}
                          {o.customer_address && (
                            <div>{o.customer_address}</div>
                          )}
                        </OrderMetaExtra>
                      )}
                      {rawItems.length > 0 && (
                        <OrderLines>
                          {rawItems.map((line, idx) => (
                            <OrderLine key={`${o.id}-line-${idx}`}>
                              <OrderLineName>
                                {lineDisplayName(
                                  {
                                    ...line,
                                    product_id:
                                      line.product_id ?? line.productId ?? line.id,
                                  },
                                  activeLanguage
                                )}
                              </OrderLineName>
                              <OrderLineQty>×{line.quantity ?? 1}</OrderLineQty>
                            </OrderLine>
                          ))}
                        </OrderLines>
                      )}
                      <OrderFooter>
                        <StatusBadge {...statusBadgeProps(o.status)}>{o.status}</StatusBadge>
                        <OrderTotal>
                          {parseFloat(o.total || 0).toFixed(2)} {o.currency || ""}
                        </OrderTotal>
                      </OrderFooter>
                      <OrderActions>
                        <ReorderButton
                          type="button"
                          disabled={reorderBusyId != null}
                          onClick={() => handleReorder(o)}
                        >
                          <FaRedo aria-hidden />
                          {reorderBusyId === o.id
                            ? t("Adding…", "جاري الإضافة…")
                            : t("Reorder", "إعادة الطلب")}
                        </ReorderButton>
                      </OrderActions>
                    </OrderCard>
                  );
                })
              )}
            </OrderList>
            )}
            {drawerTab === "addresses" && addressSubView === "list" && (
              <OrderList>
                {addressesLoading ? (
                  <LoadingOrders>{t("Loading…", "جاري التحميل…")}</LoadingOrders>
                ) : addresses.length === 0 ? (
                  <EmptyOrders>
                    {t(
                      "No saved addresses yet. Add one for faster delivery checkout.",
                      "لا توجد عناوين بعد. أضف عنواناً لتسريع التوصيل."
                    )}
                  </EmptyOrders>
                ) : (
                  addresses.map((a) => (
                    <AddressCard key={a.id}>
                      <AddressLabelRow>
                        <span>
                          {a.label || t("Address", "عنوان")}
                          {a.is_default ? (
                            <span style={{ marginLeft: 8, fontSize: 11, color: "#64748b" }}>
                              ({t("default", "افتراضي")})
                            </span>
                          ) : null}
                        </span>
                      </AddressLabelRow>
                      <AddressBody>{a.full_address}</AddressBody>
                      <AddressToolbar>
                        {!a.is_default && (
                          <SmallGhostBtn
                            type="button"
                            onClick={() => setAddressAsDefault(a.id)}
                          >
                            <FaStar aria-hidden />
                            {t("Set default", "افتراضي")}
                          </SmallGhostBtn>
                        )}
                        <SmallGhostBtn type="button" onClick={() => startEditAddress(a)}>
                          <FaPen aria-hidden />
                          {t("Edit", "تعديل")}
                        </SmallGhostBtn>
                        <DangerMiniBtn type="button" onClick={() => deleteAddress(a.id)}>
                          <FaTrash aria-hidden />
                          {t("Delete", "حذف")}
                        </DangerMiniBtn>
                      </AddressToolbar>
                    </AddressCard>
                  ))
                )}
                <AddAddressButton type="button" onClick={startNewAddress}>
                  {t("+ Add address", "+ إضافة عنوان")}
                </AddAddressButton>
              </OrderList>
            )}
            {drawerTab === "addresses" && addressSubView === "edit" && (
              <OrderList>
                <AddressFormWrap onSubmit={saveAddress}>
                  <FieldGroup>
                    <Label>{t("Label (optional)", "اسم العنوان (اختياري)")}</Label>
                    <Input
                      value={addressForm.label}
                      onChange={(e) =>
                        setAddressForm((p) => ({ ...p, label: e.target.value }))
                      }
                      placeholder={t("Home, Work, …", "المنزل، العمل، …")}
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <Label>{t("Full address *", "العنوان الكامل *")}</Label>
                    <TextAreaField
                      rows={4}
                      value={addressForm.full_address}
                      onChange={(e) =>
                        setAddressForm((p) => ({ ...p, full_address: e.target.value }))
                      }
                      placeholder={t("Street, building, floor, …", "الشارع، المبنى، الطابق، …")}
                    />
                  </FieldGroup>
                  <CheckboxRow>
                    <input
                      type="checkbox"
                      id="addr-default"
                      checked={!!addressForm.is_default}
                      onChange={(e) =>
                        setAddressForm((p) => ({ ...p, is_default: e.target.checked }))
                      }
                    />
                    <CheckboxLabel htmlFor="addr-default">
                      {t("Use as default delivery address", "استخدام كعنوان توصيل افتراضي")}
                    </CheckboxLabel>
                  </CheckboxRow>
                  <PrimaryButton type="submit" disabled={addressSaving}>
                    {addressSaving
                      ? t("Saving…", "جاري الحفظ…")
                      : t("Save address", "حفظ العنوان")}
                  </PrimaryButton>
                </AddressFormWrap>
              </OrderList>
            )}
          </DrawerCard>
          </>,
          portalEl
        )}

      {wishlistOpen &&
        portalEl &&
        createPortal(
          <>
            <Overlay
              onClick={() => {
                setWishlistError("");
                setWishlistOpen(false);
              }}
            />
            <DrawerCard $rtl={isRtl} dir={isRtl ? "rtl" : "ltr"}>
              <DrawerHeader>
                <DrawerTitleBlock>
                  <DrawerTitle>{t("Wishlist", "المفضلة")}</DrawerTitle>
                  <DrawerSubtitle>
                    {t(
                      "Items you saved for this restaurant.",
                      "الأصناف التي حفظتها لهذا المطعم."
                    )}
                  </DrawerSubtitle>
                </DrawerTitleBlock>
                <CloseBtn
                  type="button"
                  onClick={() => {
                    setWishlistError("");
                    setWishlistOpen(false);
                  }}
                  aria-label={t("Close", "إغلاق")}
                >
                  <FaTimes />
                </CloseBtn>
              </DrawerHeader>
              {wishlistError && (
                <div style={{ padding: "0 20px 12px" }}>
                  <ErrorText>{wishlistError}</ErrorText>
                </div>
              )}
              <OrderList>
                {wishlistLoading ? (
                  <LoadingOrders>{t("Loading…", "جاري التحميل…")}</LoadingOrders>
                ) : wishlistItems.length === 0 ? (
                  <EmptyOrders>
                    {t(
                      "No saved items yet. Use the heart on products to add them here.",
                      "لا توجد أصناف محفوظة بعد. استخدم القلب على المنتجات لإضافتها."
                    )}
                  </EmptyOrders>
                ) : (
                  wishlistItems.map((p) => {
                    const unit = getDiscountedUnitPrice(p);
                    return (
                      <OrderCard key={p.id}>
                        <OrderMeta style={{ alignItems: "center", gap: 12 }}>
                          {p.logoURL ? (
                            <img
                              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${p.logoURL}`}
                              alt=""
                              style={{
                                width: 52,
                                height: 52,
                                objectFit: "cover",
                                borderRadius: 10,
                                flexShrink: 0,
                              }}
                            />
                          ) : null}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <OrderLineName style={{ fontSize: 15 }}>
                              {productWishlistName(p, activeLanguage)}
                            </OrderLineName>
                            <OrderDate style={{ marginTop: 4 }}>
                              {unit.toFixed(2)}
                            </OrderDate>
                          </div>
                        </OrderMeta>
                        <OrderActions>
                          <ReorderButton
                            type="button"
                            disabled={wishlistCartBusyId != null}
                            onClick={() => addWishlistProductToCart(p)}
                          >
                            {wishlistCartBusyId === p.id
                              ? t("Adding…", "جاري الإضافة…")
                              : t("Add to cart", "أضف للسلة")}
                          </ReorderButton>
                          <DangerMiniBtn
                            type="button"
                            onClick={() => removeWishlistItem(p.id)}
                          >
                            <FaTrash aria-hidden />
                            {t("Remove", "إزالة")}
                          </DangerMiniBtn>
                        </OrderActions>
                      </OrderCard>
                    );
                  })
                )}
              </OrderList>
            </DrawerCard>
          </>,
          portalEl
        )}

    </>
  );
});

export default CustomerAccountNav;
