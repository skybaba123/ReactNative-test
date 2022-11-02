import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderBottomColor: "#CED5DC",
  },

  main: {
    height: "92%",
  },

  navText: {
    fontWeight: "700",
    fontSize: 17,
    color: "#141619",
  },

  portfolioBalance: {
    paddingHorizontal: 15,
  },

  portfolioBalanceTextLight: {
    fontWeight: "400",
    fontSize: 14,
    color: "#707070",
  },

  portfolioBalanceTextBold: {
    fontWeight: "600",
    fontSize: 30,
    color: "#111111",
  },

  portfolioBalanceTextColored: {
    fontWeight: "400",
    fontSize: 11,
    color: "#00FF7F",
  },

  chartContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  timeFrame: {
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  timeFrameText: {
    fontWeight: "400",
    fontSize: 14,
    color: "#707070",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    marginBottom: 15,
  },

  menuChild: {
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    padding: 5,
  },

  menuChildActive: {
    backgroundColor: "#111111",
    borderRadius: 100,
    padding: 5,
    color: "#fff",
  },

  assetsBalContainer: {
    alignItems: "center",
  },

  assetsBal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
    height: 58,
    borderWidth: 1,
    width: 390,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#CFCFCF",
  },

  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
    height: 58,
    borderWidth: 0,
    width: 390,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#CFCFCF",
    backgroundColor: "#F5F5F5",
  },

  accountDetailsLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "space-between",
  },

  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
});

export default styles;
