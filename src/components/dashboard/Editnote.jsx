<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
<div>
  <List>
    {emails.map(email => (
      <ListItem button onClick={() => handleListItemClick(email)} key={email}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={email} />
      </ListItem>
    ))}
    <ListItem button onClick={() => handleListItemClick('addAccount')}>
      <ListItemAvatar>
        <Avatar>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="add account" />
    </ListItem>
  </List>
</div>
</Dialog>