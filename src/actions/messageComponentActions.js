export const handleClose = () => ({
    type: 'CLOSE_BUTTON_CLICKED',
    isVisible: false,
    message: ''
});

export const handleDisplayMessage = message => ({
    type: 'MESSAGE_SETTED',
    isVisible: true,
    message: message
});