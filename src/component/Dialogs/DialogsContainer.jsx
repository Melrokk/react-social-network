import React from "react";
import {addMessageCreator, changeTextMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
      changeTextMessage: (text) => {
          dispatch(changeTextMessageCreator(text));
      },
      addMessage: () => {
          dispatch(addMessageCreator());
      }
  }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
