import * as React from "react"

import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native"
import Gdk from "react-native-gdk"

const gdk = Gdk()


const App: React.FunctionComponent = () => {
  const [mnemonic, setMnemonic] = React.useState(gdk.generateMnemonic12())
  const called = React.useRef(false)

  React.useEffect(() => {
    if (called.current) {
      return
    }

    gdk.init()
    gdk.createSession()

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>mnemonic: {mnemonic}</Text>
      <Button title="connect" onPress={() => {
        gdk.connect("electrum-testnet-liquid", "test-app")
      }}>
        Connect
      </Button>
      <Button title="register" onPress={() => {
        gdk.register({}, { mnemonic, password: "" })
      }}>
        Connect
      </Button>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20
  }
})
