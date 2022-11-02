import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.nav}>
          <Image source={require("./assets/images/Round.png")} />
          <Text style={styles.navText}>Portfolio</Text>
          <Image source={require("./assets/images/challenge.png")} />
        </View>

        <ScrollView style={styles.main}>
          <View style={styles.portfolioBalance}>
            <Text style={styles.portfolioBalanceTextLight}>
              Portfolio Balance
            </Text>
            <Text style={styles.portfolioBalanceTextBold}>$38,552.62</Text>
            <Text style={styles.portfolioBalanceTextColored}>
              +$1,439.58(3.88%)
            </Text>
          </View>

          <View style={styles.chartContainer}>
            <Image source={require("./assets/images/Vector.png")} />
          </View>

          <View style={styles.timeFrame}>
            <Text style={styles.timeFrameText}>1H</Text>
            <Text style={styles.timeFrameText}>1D</Text>
            <Text style={styles.timeFrameText}>1W</Text>
            <Text style={styles.timeFrameText}>1M</Text>
            <Text style={styles.timeFrameText}>1Y</Text>
            <Text style={styles.timeFrameText}>All</Text>
          </View>

          <View style={styles.menu}>
            <Text style={styles.menuChildActive}>Overview</Text>
            <Text style={styles.menuChild}>Arts</Text>
            <Text style={styles.menuChild}>Crypto</Text>
            <Text style={styles.menuChild}>Stocks</Text>
            <Text style={styles.menuChild}>Estate</Text>
          </View>

          <View style={styles.assetsBalContainer}>
            <View style={styles.assetsBal}>
              <Text>Invested in assets</Text>
              <Text>$38,650.31</Text>
            </View>
            <View style={styles.assetsBal}>
              <Text>Cash Balance</Text>
              <Text>$650.31</Text>
            </View>
            <View style={styles.accountDetails}>
              <View style={styles.accountDetailsLeft}>
                <Image source={require("./assets/images/budget.png")} />
                <Text>Account Details</Text>
              </View>
              <Image source={require("./assets/images/arrow-left.png")} />
            </View>
          </View>
        </ScrollView>

        <View style={styles.navigation}>
          <Image source={require("./assets/images/home.png")} />
          <Image source={require("./assets/images/Search.png")} />
          <Image source={require("./assets/images/plus.png")} />
          <Image source={require("./assets/images/bell.png")} />
          <Image source={require("./assets/images/portfolio.png")} />
        </View>
      </View>
    </>
  );
}
