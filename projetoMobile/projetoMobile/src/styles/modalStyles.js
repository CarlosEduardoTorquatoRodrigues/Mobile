import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  headerText: {
    fontSize: theme.fontSize.xxlarge,
    fontWeight: 'bold',
    marginBottom: theme.spacing.lg,
  },
  mainButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.large,
    elevation: 4,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xlarge,
    padding: theme.spacing.xl,
    alignItems: 'center',
    overflow: 'hidden',
  },
  colorIndicator: {
    width: '120%',
    height: 8,
    position: 'absolute',
    top: 0,
  },
  modalTitle: {
    fontSize: theme.fontSize.xlarge,
    fontWeight: 'bold',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    color: theme.colors.darkGray,
  },
  modalBody: {
    fontSize: theme.fontSize.regular,
    textAlign: 'center',
    color: theme.colors.gray,
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.medium,
  },
  closeButtonText: {
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
});