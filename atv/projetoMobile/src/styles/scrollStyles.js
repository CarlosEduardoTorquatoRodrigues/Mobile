import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  // Estilos para ScrollView
  scrollItem: {
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollText: {
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  scrollDescription: {
    fontSize: theme.fontSize.small,
    color: theme.colors.gray,
    marginTop: theme.spacing.xs,
  },
  // Estilos para cabeçalhos
  header: {
    fontSize: theme.fontSize.xlarge,
    fontWeight: 'bold',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.gray,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  // Estilos para FlatList
  flatListItem: {
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
  },
  flatListTitle: {
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  flatListPrice: {
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
    marginTop: theme.spacing.xs,
  },
  // Estilos para SectionList
  sectionHeader: {
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  sectionListItem: {
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
  },
  sectionListName: {
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  sectionListPrice: {
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
    marginTop: theme.spacing.xs,
  },
});