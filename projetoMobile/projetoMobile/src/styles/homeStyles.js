import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  welcomeCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xlarge,
    padding: theme.spacing.xl,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    fontSize: 64,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSize.huge,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  message: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: theme.spacing.md,
  },
});