import React from "react";
import {addMessageCreator, changeTextMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hocs/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth
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


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
