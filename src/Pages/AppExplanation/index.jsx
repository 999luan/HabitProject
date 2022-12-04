import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  handleSetShowHome,
  handleNavHome,
} from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";
import ChangeNavigationService from "../../Services/ChangeNavigationService";
export default function AppExplanation() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState("false");
  const startDate = new Date();
  const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;

  function handleNavHome() {
    navigation.navigate("Home");
  }
  function handleSetShowHome() {
    if (showHome !== "true") {
      ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch((err) => console.log(err));
      setShowHome("true");

      handleNavHome();
    }

    handleNavHome();
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar...
          </Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>
            Prontx para melhorar seu ser?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {"\n"} seus 4 habitos de
            forma individual.{"\n"} Cultive um nucleo ao assimilar habitos{"\n"}{" "}
            e purifique até que brilhe como sua alma!
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});
