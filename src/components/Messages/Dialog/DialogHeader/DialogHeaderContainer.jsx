import {connect} from "react-redux";
import DialogHeader from "./DialogHeader";


const mapStateToProps = (state) => ({
    img: state.messagesPage.messagesData[0].img,
    name: state.messagesPage.messagesData[0].name
    // example lastMessages: state.messagesPage.messagesData.map(lastM => <LastMessage key={lastM.id} name={lastM.name} img={lastM.img} date={lastM.date} message={lastM.message} />)
});

const DialogHeaderContainer = connect(mapStateToProps)(DialogHeader);

export default DialogHeaderContainer;
