import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 10px;
`;

const Emoji = styled.div`
  font-size: 44px;
  line-height: 1;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: var(--theme-text, #111);
  letter-spacing: -0.2px;
`;

const Sub = styled.div`
  font-size: 13.5px;
  color: var(--theme-text, #888);
  opacity: 0.5;
`;

const labels = {
  search: {
    en: { emoji: '🔍', title: 'No results found', sub: 'Try a different search term' },
    ar: { emoji: '🔍', title: 'لم يتم العثور على نتائج', sub: 'جرّب مصطلح بحث آخر' },
  },
  empty: {
    en: { emoji: '🍽️', title: 'No items yet', sub: 'Check back soon' },
    ar: { emoji: '🍽️', title: 'لا توجد عناصر بعد', sub: 'تحقق مرة أخرى قريباً' },
  },
};

export default function ElegantEmptyState({ type = 'empty', activeLanguage = 'en' }) {
  const lang = activeLanguage === 'ar' ? 'ar' : 'en';
  const { emoji, title, sub } = (labels[type] || labels.empty)[lang];
  return (
    <Wrap>
      <Emoji>{emoji}</Emoji>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
    </Wrap>
  );
}
