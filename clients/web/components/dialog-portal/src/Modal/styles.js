export default theme => ({
  contentText: {
    minWidth: 500,
    fontFamily: theme.typography.fontFamily,
    // color: Colors.muted,
    // fontSize: Fonts.fontSize.M,
    '& p': {
      marginBottom: 5
    }
  },
  dialogTop: {
    alignItems: 'flex-start'
  }
})
