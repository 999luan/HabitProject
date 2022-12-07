import React, { useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";
import AnimationService from "../../../Services/AnimationService";
export default function LifeStatus({
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit,
}) {
  /*  
    Status:
    100 - max
    50 - med
    25 - low
    00 - u die 
    No robo primeiramente felicidade depois saude (robo estranho)
    
    */
  const [mind, setMind] = useState();

  const [money, setMoney] = useState();

  const [robot, setRobot] = useState();

  useEffect(() => {
    AnimationService.animationStatus(
      mindHabit?.progressBar,
      moneyHabit?.progressBar,
      bodyHabit?.progressBar,
      funHabit?.progressBar,
      setMind,
      setMoney,
      setRobot
    );
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);

  return (
    <>
      <View>
        <Lottie source={robot} autoPlay loop style={styles.roboAnimacao} />
      </View>
      <View style={styles.container}>
        <Lottie source={mind} autoPlay loop style={styles.educacaoAnimacao} />
        <Lottie source={money} autoPlay loop style={styles.financasAnimacao} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  roboAnimacao: {
    position: "absolute",
    width: 390,
    height: 300,
    marginTop: 0,
    marginLeft: -95,
  },
  educacaoAnimacao: {
    width: 100,
    marginTop: 80,
    marginLeft: 5,
    position: "absolute",
  },
  financasAnimacao: {
    width: 100,
    marginTop: 80,
    marginLeft: 95,
    position: "absolute",
  },
});
