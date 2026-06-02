import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const BASE = process.env.REACT_APP_BASE_URL;

const COLOR_GROUPS = [
  { label: "General", keys: ["mainColor", "backgroundColor", "textColor"] },
  { label: "Categories", keys: ["categoryActive", "categoryActiveText", "categoryActiveIcon", "categoryUnActive", "categoryUnactiveIcon", "homepageCategoriesBackgroundColor"] },
  { label: "Products", keys: ["BoxColor", "BoxTextColor", "BoxPriceColor"] },
  { label: "Navigation & Search", keys: ["searchbackground", "searchTextColor", "languagebackground", "languageTextColor", "sidebarbackground", "sidebartext", "sidebarsearch", "sidebarsearchText"] },
  { label: "Popups & Forms", keys: ["popupbackgroundColor", "popupTextColor", "popupbuttonText", "formColor"] },
  { label: "Bottom Bar", keys: ["bottomTabBarBackgroundColor"] },
  { label: "Theme 3/4 Extra", keys: ["borderColor", "homepageBackgroundColor", "navigationBarBackgroundColor", "slidingButtonBackgroundColor", "slidingButtonTextColor", "hplocationBackgroundColor", "hplocationTextColor"] },
];

const Wrap = styled.div`display:flex;gap:20px;@media(max-width:768px){flex-direction:column;}`;
const Sidebar = styled.div`width:200px;flex-shrink:0;display:flex;flex-direction:column;gap:6px;@media(max-width:768px){width:100%;flex-direction:row;overflow-x:auto;}`;
const SideItem = styled.div`padding:10px 14px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${p=>p.$active?"600":"400"};background:${p=>p.$active?"#e8f4f5":"#fff"};border:1px solid ${p=>p.$active?"#5eabb1":"#e2e8f0"};color:${p=>p.$active?"#0f172a":"#64748b"};white-space:nowrap;display:flex;align-items:center;gap:8px;&:hover{background:#f0f6f6;}`;
const ColorDot = styled.div`width:16px;height:16px;border-radius:50%;border:2px solid #e2e8f0;flex-shrink:0;`;
const Main = styled.div`flex:1;min-width:0;`;
const Card = styled.div`background:#fff;border-radius:14px;border:1px solid rgba(148,163,184,0.18);box-shadow:0 4px 20px rgba(15,23,42,0.07);padding:24px;margin-bottom:16px;`;
const GroupTitle = styled.h4`margin:0 0 12px;font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;`;
const ColorRow = styled.div`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;
const ColorLabel = styled.label`font-size:13px;color:#334155;min-width:220px;`;
const ColorInput = styled.input`width:40px;height:30px;border:1px solid #e2e8f0;border-radius:6px;padding:2px;cursor:pointer;background:#fff;`;
const HexInput = styled.input`width:90px;padding:6px 10px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;font-family:monospace;outline:none;&:focus{border-color:#5eabb1;}`;
const Btn = styled.button`padding:8px 20px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;background:${p=>p.$color||"#5eabb1"};color:#fff;&:hover{opacity:0.9;}&:disabled{opacity:0.5;}`;
const BtnOutline = styled.button`padding:6px 14px;border-radius:8px;border:1px solid #e2e8f0;font-size:12px;font-weight:500;cursor:pointer;background:#fff;color:#64748b;&:hover{border-color:#5eabb1;color:#5eabb1;}`;
const BtnDanger = styled.button`padding:6px 12px;border-radius:6px;border:none;font-size:12px;font-weight:600;cursor:pointer;background:#fee2e2;color:#dc2626;&:hover{background:#fecaca;}`;
const TopBar = styled.div`display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px;`;
const SuccessMsg = styled.div`padding:8px 16px;border-radius:8px;background:#d1fae5;color:#065f46;font-size:13px;font-weight:500;`;
const PreviewBar = styled.div`display:flex;gap:4px;padding:12px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;margin-bottom:16px;flex-wrap:wrap;`;
const PreviewSwatch = styled.div`width:36px;height:36px;border-radius:8px;border:1px solid rgba(0,0,0,0.08);position:relative;&:hover::after{content:attr(title);position:absolute;bottom:-22px;left:50%;transform:translateX(-50%);font-size:10px;white-space:nowrap;background:#1e293b;color:#fff;padding:2px 6px;border-radius:4px;z-index:1;}`;
const NameInput = styled.input`padding:8px 14px;border-radius:8px;border:1px solid #e2e8f0;font-size:14px;outline:none;width:200px;&:focus{border-color:#5eabb1;}`;

export default function ColorThemeManager() {
  const [presets, setPresets] = useState({});
  const [selectedName, setSelectedName] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => { fetchPresets(); }, []);

  const fetchPresets = async () => {
    const res = await axios.get(`${BASE}/superadmin/color-presets`);
    setPresets(res.data);
    const names = Object.keys(res.data);
    if (names.length && !selectedName) setSelectedName(names[0]);
  };

  const save = async () => {
    setSaving(true);
    await axios.put(`${BASE}/superadmin/color-presets`, presets);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateColor = (key, value) => {
    setPresets(prev => ({
      ...prev,
      [selectedName]: { ...prev[selectedName], [key]: value }
    }));
  };

  const addPreset = () => {
    const name = newName.trim();
    if (!name || presets[name]) return;
    const firstPreset = Object.values(presets)[0] || {};
    const blank = {};
    Object.keys(firstPreset).forEach(k => { blank[k] = "#ffffff"; });
    setPresets(prev => ({ ...prev, [name]: blank }));
    setSelectedName(name);
    setNewName("");
  };

  const duplicatePreset = () => {
    if (!selectedName) return;
    const name = `${selectedName} Copy`;
    setPresets(prev => ({ ...prev, [name]: { ...prev[selectedName] } }));
    setSelectedName(name);
  };

  const deletePreset = async (name) => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    const copy = { ...presets };
    delete copy[name];
    setPresets(copy);
    if (selectedName === name) setSelectedName(Object.keys(copy)[0] || null);
    await axios.put(`${BASE}/superadmin/color-presets`, copy);
  };

  const colors = selectedName ? presets[selectedName] || {} : {};
  const allColorKeys = Object.keys(colors);
  const groupedKeys = new Set(COLOR_GROUPS.flatMap(g => g.keys));
  const ungroupedKeys = allColorKeys.filter(k => !groupedKeys.has(k));

  return (
    <Wrap>
      <Sidebar>
        {Object.keys(presets).map(name => (
          <SideItem key={name} $active={selectedName === name} onClick={() => setSelectedName(name)}>
            <ColorDot style={{background: presets[name]?.mainColor || "#ccc"}} />
            {name}
          </SideItem>
        ))}
        <div style={{display:"flex",gap:4,marginTop:8}}>
          <NameInput placeholder="New preset name" value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addPreset()} style={{width:"100%",fontSize:12}} />
          <BtnOutline onClick={addPreset} style={{whiteSpace:"nowrap"}}>Add</BtnOutline>
        </div>
      </Sidebar>

      <Main>
        {selectedName && (
          <>
            <TopBar>
              <div>
                <h2 style={{margin:0,fontSize:20,fontWeight:700,color:"#0f172a"}}>{selectedName}</h2>
                <span style={{fontSize:12,color:"#64748b"}}>{allColorKeys.length} colors</span>
              </div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                {saved && <SuccessMsg>Saved!</SuccessMsg>}
                <BtnOutline onClick={duplicatePreset}>Duplicate</BtnOutline>
                <BtnDanger onClick={()=>deletePreset(selectedName)}>Delete</BtnDanger>
                <Btn onClick={save} disabled={saving}>{saving ? "Saving..." : "Save All"}</Btn>
              </div>
            </TopBar>

            <PreviewBar>
              {allColorKeys.slice(0, 12).map(k => (
                <PreviewSwatch key={k} style={{background:colors[k]}} title={k} />
              ))}
            </PreviewBar>

            {COLOR_GROUPS.map(group => {
              const active = group.keys.filter(k => colors[k] !== undefined);
              if (!active.length) return null;
              return (
                <Card key={group.label}>
                  <GroupTitle>{group.label}</GroupTitle>
                  {active.map(key => (
                    <ColorRow key={key}>
                      <ColorInput type="color" value={colors[key]||"#000000"} onChange={e=>updateColor(key,e.target.value)} />
                      <HexInput value={colors[key]||""} onChange={e=>updateColor(key,e.target.value)} />
                      <ColorLabel>{key}</ColorLabel>
                    </ColorRow>
                  ))}
                </Card>
              );
            })}

            {ungroupedKeys.length > 0 && (
              <Card>
                <GroupTitle>Other</GroupTitle>
                {ungroupedKeys.map(key => (
                  <ColorRow key={key}>
                    <ColorInput type="color" value={colors[key]||"#000000"} onChange={e=>updateColor(key,e.target.value)} />
                    <HexInput value={colors[key]||""} onChange={e=>updateColor(key,e.target.value)} />
                    <ColorLabel>{key}</ColorLabel>
                  </ColorRow>
                ))}
              </Card>
            )}
          </>
        )}
      </Main>
    </Wrap>
  );
}
