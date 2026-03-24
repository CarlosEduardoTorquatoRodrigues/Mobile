// Dados para o ScrollView
export const scrollViewData = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
  description: `Descrição do item ${i + 1}`,
}));

// Dados para o FlatList
export const flatListData = Array.from({ length: 80 }, (_, i) => ({
  id: i.toString(),
  name: `Item ${i + 1}`,
}));

// Dados para o SectionList com cabeçalhos
export const sectionListData = [
  {
    title: 'Roupas',
    data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Veiculos',
    data: ['Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11'],
  },
  {
    title: 'Aparelhos',
    data: ['Item 12', 'Item 13', 'Item 14', 'Item 15'],
  },
];