import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const ConfirmationDialog = ({
  ctext, isOpen, handleOk, handleCancel,
}) => (
  <Dialog
    open={isOpen}
    onClose={handleCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {ctext}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={handleOk}
        variant="contained"
        color="secondary"
        sx={{ color: '#ffffff', fontWeight: 700 }}
      >
        Confirm
      </Button>
      <Button
        onClick={handleCancel}
        autoFocus
        variant="contained"
        color="secondary"
        sx={{ color: '#ffffff', fontWeight: 700 }}
      >
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);

ConfirmationDialog.defaultProps = {
  ctext: '',
  isOpen: true,
  handleOk: null,
  handleCancel: null,
};

ConfirmationDialog.propTypes = {
  ctext: PropTypes.string,
  isOpen: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default ConfirmationDialog;
