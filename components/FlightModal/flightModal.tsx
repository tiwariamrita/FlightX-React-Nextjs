import React from "react";
import FlightDetails from "./flightDetails";
import {
  ModalWrapper,
  SelectButton,
  BookButton,
  CloseButton,
  Modal,
  Buttons,
} from "./flightModal.styles";
import { withTranslation } from "next-i18next";

/**
 * Represents the modal with flight details onlick of select button from flightBlock
 * @constructor
 * @param props
 */

class FlightModal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { t } = this.props;

    return (
      <ModalWrapper>
        <SelectButton onClick={this.handleOpenModal}>
          {t("select")}
        </SelectButton>
        {Modal.setAppElement("body")}
        <Modal isOpen={this.state.showModal} contentLabel="Flight Details">
          <FlightDetails
            airline={this.props.airline}
            flightNumber={this.props.flightNumber}
            takeoff={this.props.takeoff}
            landing={this.props.landing}
            departureAirport={this.props.departureAirport}
            arrivalAirport={this.props.arrivalAirport}
            duration={this.props.duration}
            price={this.props.price}
          ></FlightDetails>
          <Buttons>
            <BookButton onClick={this.handleCloseModal}>{t("book")}</BookButton>
            <CloseButton onClick={this.handleCloseModal}>
              {t("close")}
            </CloseButton>
          </Buttons>
        </Modal>
      </ModalWrapper>
    );
  }
}

export default withTranslation("common")(FlightModal);
