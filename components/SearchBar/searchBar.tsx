import React from "react";
import "react-day-picker/lib/style.css";
import DatePicker from "./datePicker";
import FlightBlock from "../FlightBlock/flightBlock";
import {
  FlightData,
  flights,
  airports,
  airlines,
} from "../../public/flightData";
import {
  Wrapper,
  ImageWrapper,
  FormContainer,
  InnerSection,
  InputField,
  SearchButton,
  HeadingLabel,
  TextLabel,
} from "./searchBar.styles";
import { withTranslation } from "next-i18next";

interface AppState {
  from: string;
  to: string;
  date: string;
  flight_results: Array<FlightData>;
}

class SearchBar extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      from: "",
      to: "",
      date: "",
      flight_results: [],
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state.flight_results);
  }

  handleFromChange(event: any) {
    this.setState({ from: event.target.value });
  }
  handleToChange(event: any) {
    this.setState({ to: event.target.value });
  }
  handleDateChange(event: any) {
    this.setState({ date: event.target.value });
  }

  filter_flights(from: string, to: string) {
    return flights.filter(
      (item) =>
        // item.departureAirport == "/airports/" + from &&
        // item.arrivalAirport == "/airports/" + to
        item.departureAirport == from && item.arrivalAirport == to
    );
  }

  handleSubmit(event: any) {
    event.preventDefault();
    if (
      !(`/airports/${this.state.from}` in airports) ||
      !(`/airports/${this.state.to}` in airports)
    ) {
      alert("ERROR: Invalid Airport!");
      return false;
    }
    this.setState({
      flight_results: this.filter_flights(this.state.from, this.state.to),
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Wrapper>
        <ImageWrapper>
          <HeadingLabel>{t("heading")}</HeadingLabel>
          <FormContainer onSubmit={this.handleSubmit}>
            <InnerSection>
              <TextLabel>{t("from")}</TextLabel>
              <InputField
                type="text"
                value={this.state.from}
                onChange={this.handleFromChange}
              />
            </InnerSection>
            <InnerSection>
              <TextLabel>{t("to")}</TextLabel>
              <InputField
                type="text"
                value={this.state.to}
                onChange={this.handleToChange}
              />
            </InnerSection>
            <InnerSection>
              <TextLabel>{t("date")}</TextLabel>
              <DatePicker></DatePicker>
            </InnerSection>
            <InnerSection>
              <TextLabel>{t("go")}</TextLabel>
              <SearchButton type="submit" value={t("search")} />
            </InnerSection>
          </FormContainer>
        </ImageWrapper>
        {this.state.flight_results.map((item: FlightData, id: number) => {
          return (
            <FlightBlock
              airline={item.airline}
              takeoff={item.takeoff}
              landing={item.landing}
              departureAirport={item.departureAirport}
              arrivalAirport={item.arrivalAirport}
              duration={item.duration}
              price={item.price}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default withTranslation("common")(SearchBar);
