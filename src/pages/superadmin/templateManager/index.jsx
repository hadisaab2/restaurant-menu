import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const BASE = process.env.REACT_APP_BASE_URL;

const Wrap = styled.div`display:flex;gap:20px;@media(max-width:768px){flex-direction:column;}`;
const Sidebar = styled.div`width:220px;flex-shrink:0;display:flex;flex-direction:column;gap:6px;@media(max-width:768px){width:100%;flex-direction:row;overflow-x:auto;}`;
const SideItem = styled.div`padding:10px 16px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:${p=>p.$active?"600":"400"};background:${p=>p.$active?"#e8f4f5":"#fff"};border:1px solid ${p=>p.$active?"#5eabb1":"#e2e8f0"};color:${p=>p.$active?"#0f172a":"#64748b"};white-space:nowrap;&:hover{background:#f0f6f6;}`;
const Main = styled.div`flex:1;min-width:0;`;
const Card = styled.div`background:#fff;border-radius:14px;border:1px solid rgba(148,163,184,0.18);box-shadow:0 4px 20px rgba(15,23,42,0.07);padding:24px;margin-bottom:16px;`;
const Row = styled.div`display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start;margin-bottom:12px;`;
const Field = styled.div`display:flex;flex-direction:column;gap:4px;flex:${p=>p.$flex||1};min-width:${p=>p.$minW||"120px"};`;
const Label = styled.label`font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;`;
const Input = styled.input`padding:8px 12px;border-radius:8px;border:1px solid #e2e8f0;font-size:13px;outline:none;&:focus{border-color:#5eabb1;}`;
const TextArea = styled.textarea`padding:8px 12px;border-radius:8px;border:1px solid #e2e8f0;font-size:13px;outline:none;resize:vertical;min-height:50px;&:focus{border-color:#5eabb1;}`;
const Btn = styled.button`padding:8px 20px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;background:${p=>p.$color||"#5eabb1"};color:#fff;&:hover{opacity:0.9;}&:disabled{opacity:0.5;cursor:default;}`;
const BtnOutline = styled.button`padding:6px 14px;border-radius:8px;border:1px solid #e2e8f0;font-size:12px;font-weight:500;cursor:pointer;background:#fff;color:#64748b;&:hover{border-color:#5eabb1;color:#5eabb1;}`;
const BtnDanger = styled.button`padding:4px 10px;border-radius:6px;border:none;font-size:11px;font-weight:600;cursor:pointer;background:#fee2e2;color:#dc2626;&:hover{background:#fecaca;}`;
const UploadBtn = styled.label`padding:6px 12px;border-radius:8px;border:1px dashed #94a3b8;font-size:11px;font-weight:500;cursor:pointer;background:#f8fafc;color:#64748b;display:inline-flex;align-items:center;gap:4px;white-space:nowrap;&:hover{border-color:#5eabb1;color:#5eabb1;background:#f0f9fa;}`;
const HiddenInput = styled.input`display:none;`;
const SectionTitle = styled.h3`margin:0 0 14px;font-size:16px;font-weight:700;color:#0f172a;display:flex;align-items:center;justify-content:space-between;`;
const CatHeader = styled.div`display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:10px;background:#f8fafc;cursor:pointer;margin-bottom:8px;border:1px solid #e2e8f0;&:hover{background:#f0f6f6;}`;
const CatTitle = styled.span`font-size:14px;font-weight:600;color:#0f172a;`;
const Badge = styled.span`font-size:11px;color:#64748b;background:#f1f5f9;padding:2px 8px;border-radius:4px;`;
const ImgPreview = styled.img`width:48px;height:48px;border-radius:8px;object-fit:cover;border:1px solid #e2e8f0;`;
const TopBar = styled.div`display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px;`;
const SuccessMsg = styled.div`padding:8px 16px;border-radius:8px;background:#d1fae5;color:#065f46;font-size:13px;font-weight:500;`;

export default function TemplateManager() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expandedCats, setExpandedCats] = useState({});

  useEffect(() => { fetchList(); }, []);

  const fetchList = async () => {
    const res = await axios.get(`${BASE}/superadmin/templates`);
    setTemplates(res.data);
    if (res.data.length && !selected) { selectTemplate(res.data[0].file); }
  };

  const selectTemplate = async (name) => {
    setSelected(name);
    setSaved(false);
    const res = await axios.get(`${BASE}/superadmin/templates/${name}`);
    setData(res.data);
    setExpandedCats({});
  };

  const save = async () => {
    if (!data || !selected) return;
    setSaving(true);
    await axios.put(`${BASE}/superadmin/templates/${selected}`, data);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateField = (path, value) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      let obj = copy;
      const keys = path.split(".");
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  const updateCategory = (idx, field, value) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy.categories[idx][field] = value;
      return copy;
    });
  };

  const updateProduct = (idx, field, value) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy.products[idx][field] = value;
      return copy;
    });
  };

  const updateProductOption = (pIdx, optType, oIdx, field, value) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      if (!copy.products[pIdx].options) copy.products[pIdx].options = {};
      if (!copy.products[pIdx].options[optType]) copy.products[pIdx].options[optType] = [];
      copy.products[pIdx].options[optType][oIdx][field] = value;
      return copy;
    });
  };

  const addCategory = () => {
    setData(prev => ({
      ...prev,
      categories: [...prev.categories, { key: `cat_${Date.now()}`, en_category: "", ar_category: "", priority: prev.categories.length + 1, icon_url: "" }]
    }));
  };

  const removeCategory = (idx) => {
    const cat = data.categories[idx];
    setData(prev => ({
      ...prev,
      categories: prev.categories.filter((_, i) => i !== idx),
      products: prev.products.filter(p => p.category_key !== cat.key),
    }));
  };

  const addProduct = (categoryKey) => {
    setData(prev => ({
      ...prev,
      products: [...prev.products, { category_key: categoryKey, en_name: "", ar_name: "", en_description: "", ar_description: "", price: "0", image_url: "", priority: 1, options: null }]
    }));
  };

  const removeProduct = (idx) => {
    setData(prev => ({ ...prev, products: prev.products.filter((_, i) => i !== idx) }));
  };

  const addOption = (pIdx, optType) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      if (!copy.products[pIdx].options) copy.products[pIdx].options = {};
      if (!copy.products[pIdx].options[optType]) copy.products[pIdx].options[optType] = [];
      const item = optType === "removals" ? { label: "", label_ar: "" } : { label: "", label_ar: "", price: 0 };
      copy.products[pIdx].options[optType].push(item);
      return copy;
    });
  };

  const removeOption = (pIdx, optType, oIdx) => {
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy.products[pIdx].options[optType].splice(oIdx, 1);
      return copy;
    });
  };

  const uploadImage = async (file, callback) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(`${BASE}/superadmin/upload-image`, formData, { headers: { "Content-Type": "multipart/form-data" } });
      callback(res.data.url);
    } catch (err) {
      alert("Upload failed: " + (err.response?.data?.error || err.message));
    }
  };

  const toggleCat = (key) => setExpandedCats(prev => ({ ...prev, [key]: !prev[key] }));

  if (!data) return <Card><p style={{color:"#64748b"}}>Loading templates...</p></Card>;

  const catProducts = (catKey) => data.products.map((p, i) => ({ ...p, _idx: i })).filter(p => p.category_key === catKey);

  return (
    <Wrap>
      <Sidebar>
        {templates.map(t => (
          <SideItem key={t.file} $active={selected === t.file} onClick={() => selectTemplate(t.file)}>
            {t.displayName}
          </SideItem>
        ))}
      </Sidebar>
      <Main>
        <TopBar>
          <div>
            <h2 style={{margin:0,fontSize:20,fontWeight:700,color:"#0f172a"}}>{data.displayName || selected}</h2>
            <span style={{fontSize:12,color:"#64748b"}}>{data.categories?.length} categories, {data.products?.length} products</span>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            {saved && <SuccessMsg>Saved!</SuccessMsg>}
            <Btn onClick={save} disabled={saving}>{saving ? "Saving..." : "Save Template"}</Btn>
          </div>
        </TopBar>

        {/* Template Settings */}
        <Card>
          <SectionTitle>Template Settings</SectionTitle>
          <Row>
            <Field><Label>Display Name</Label><Input value={data.displayName||""} onChange={e=>updateField("displayName",e.target.value)} /></Field>
            <Field><Label>Business Type</Label><Input value={data.businessType||""} onChange={e=>updateField("businessType",e.target.value)} /></Field>
            <Field $flex="0.5"><Label>Theme</Label><Input type="number" value={data.defaultThemeTemplate||""} onChange={e=>updateField("defaultThemeTemplate",Number(e.target.value))} /></Field>
            <Field><Label>Color Preset</Label><Input value={data.defaultColorPreset||""} onChange={e=>updateField("defaultColorPreset",e.target.value)} /></Field>
            <Field $flex="0.5"><Label>Currency</Label><Input value={data.defaultCurrency||""} onChange={e=>updateField("defaultCurrency",e.target.value)} /></Field>
          </Row>
        </Card>

        {/* Categories & Products */}
        <Card>
          <SectionTitle>
            Categories & Products
            <BtnOutline onClick={addCategory}>+ Add Category</BtnOutline>
          </SectionTitle>
          {data.categories.map((cat, cIdx) => {
            const prods = catProducts(cat.key);
            return (
              <div key={cat.key} style={{marginBottom:12}}>
                <CatHeader onClick={() => toggleCat(cat.key)}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    {cat.icon_url && <ImgPreview src={cat.icon_url} style={{width:28,height:28}} />}
                    <CatTitle>{cat.en_category || "Untitled"}</CatTitle>
                    <Badge>{prods.length} items</Badge>
                  </div>
                  <div style={{display:"flex",gap:6}}>
                    <BtnDanger onClick={e=>{e.stopPropagation();removeCategory(cIdx)}}>Remove</BtnDanger>
                    <span style={{fontSize:18,color:"#94a3b8"}}>{expandedCats[cat.key] ? "−" : "+"}</span>
                  </div>
                </CatHeader>

                {expandedCats[cat.key] && (
                  <div style={{paddingLeft:16,borderLeft:"2px solid #e2e8f0",marginLeft:14}}>
                    <Row>
                      <Field><Label>EN Name</Label><Input value={cat.en_category||""} onChange={e=>updateCategory(cIdx,"en_category",e.target.value)} /></Field>
                      <Field><Label>AR Name</Label><Input value={cat.ar_category||""} onChange={e=>updateCategory(cIdx,"ar_category",e.target.value)} dir="rtl" /></Field>
                      <Field $flex="0.5"><Label>Priority</Label><Input type="number" value={cat.priority||""} onChange={e=>updateCategory(cIdx,"priority",Number(e.target.value))} /></Field>
                    </Row>
                    <Row>
                      <Field>
                        <Label>Icon URL</Label>
                        <div style={{display:"flex",gap:6,alignItems:"center"}}>
                          <Input style={{flex:1}} value={cat.icon_url||""} onChange={e=>updateCategory(cIdx,"icon_url",e.target.value)} />
                          <UploadBtn>
                            Upload
                            <HiddenInput type="file" accept="image/*" onChange={e=>{if(e.target.files[0]) uploadImage(e.target.files[0], url=>updateCategory(cIdx,"icon_url",url));}} />
                          </UploadBtn>
                        </div>
                      </Field>
                      <Field><Label>Key</Label><Input value={cat.key||""} onChange={e=>updateCategory(cIdx,"key",e.target.value)} /></Field>
                    </Row>

                    <div style={{marginTop:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                        <Label style={{fontSize:12}}>Products</Label>
                        <BtnOutline onClick={()=>addProduct(cat.key)}>+ Add Product</BtnOutline>
                      </div>
                      {prods.map(prod => (
                        <div key={prod._idx} style={{background:"#fafbfd",borderRadius:10,padding:14,marginBottom:10,border:"1px solid #f1f5f9"}}>
                          <Row>
                            {prod.image_url && <ImgPreview src={prod.image_url} />}
                            <Field><Label>EN Name</Label><Input value={prod.en_name||""} onChange={e=>updateProduct(prod._idx,"en_name",e.target.value)} /></Field>
                            <Field><Label>AR Name</Label><Input value={prod.ar_name||""} onChange={e=>updateProduct(prod._idx,"ar_name",e.target.value)} dir="rtl" /></Field>
                            <Field $flex="0.4"><Label>Price</Label><Input value={prod.price||""} onChange={e=>updateProduct(prod._idx,"price",e.target.value)} /></Field>
                            <div style={{alignSelf:"center"}}><BtnDanger onClick={()=>removeProduct(prod._idx)}>X</BtnDanger></div>
                          </Row>
                          <Row>
                            <Field><Label>EN Description</Label><TextArea value={prod.en_description||""} onChange={e=>updateProduct(prod._idx,"en_description",e.target.value)} /></Field>
                            <Field><Label>AR Description</Label><TextArea value={prod.ar_description||""} onChange={e=>updateProduct(prod._idx,"ar_description",e.target.value)} dir="rtl" /></Field>
                          </Row>
                          <Row>
                            <Field>
                              <Label>Image URL</Label>
                              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                                <Input style={{flex:1}} value={prod.image_url||""} onChange={e=>updateProduct(prod._idx,"image_url",e.target.value)} />
                                <UploadBtn>
                                  Upload
                                  <HiddenInput type="file" accept="image/*" onChange={e=>{if(e.target.files[0]) uploadImage(e.target.files[0], url=>updateProduct(prod._idx,"image_url",url));}} />
                                </UploadBtn>
                              </div>
                            </Field>
                            <Field $flex="0.3"><Label>Priority</Label><Input type="number" value={prod.priority||""} onChange={e=>updateProduct(prod._idx,"priority",Number(e.target.value))} /></Field>
                          </Row>

                          {/* Options */}
                          {["sizes","addons","removals"].map(optType => {
                            const opts = prod.options?.[optType] || [];
                            return (
                              <div key={optType} style={{marginTop:8}}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                                  <Label style={{fontSize:11,textTransform:"capitalize"}}>{optType} ({opts.length})</Label>
                                  <BtnOutline onClick={()=>addOption(prod._idx,optType)} style={{padding:"2px 8px",fontSize:11}}>+</BtnOutline>
                                </div>
                                {opts.map((opt, oIdx) => (
                                  <Row key={oIdx} style={{marginBottom:4}}>
                                    <Field $flex="1" $minW="80px"><Input placeholder="EN" value={opt.label||""} onChange={e=>updateProductOption(prod._idx,optType,oIdx,"label",e.target.value)} /></Field>
                                    <Field $flex="1" $minW="80px"><Input placeholder="AR" dir="rtl" value={opt.label_ar||""} onChange={e=>updateProductOption(prod._idx,optType,oIdx,"label_ar",e.target.value)} /></Field>
                                    {optType !== "removals" && <Field $flex="0.4" $minW="60px"><Input type="number" placeholder="$" value={opt.price||""} onChange={e=>updateProductOption(prod._idx,optType,oIdx,"price",Number(e.target.value))} /></Field>}
                                    <div style={{alignSelf:"center"}}><BtnDanger onClick={()=>removeOption(prod._idx,optType,oIdx)} style={{padding:"2px 6px"}}>x</BtnDanger></div>
                                  </Row>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Card>
      </Main>
    </Wrap>
  );
}
