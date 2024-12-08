import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import WifiManager from "react-native-wifi-reborn";

const PumpInputModal = ({ modalVisible, setModalVisible, handleDataUpdate }) => {
  const [PumpControlInfo, SetPumpControlInfo] = useState([{}]);
  const [inputValues, setInputValues] = useState({
    FarmId: "",
    FarmName: "",
    FarmLocation: "",
    PumpCode: "",
  });
  const [wifiNetworks, setWifiNetworks] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const handleInput = (key, value) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const updatedData = { ...inputValues, SelectedNetwork: selectedNetwork };
    handleDataUpdate(updatedData);
    setModalVisible(false);
  };

  const handleWifiScan = async () => {
    try {
      const networks = await WifiManager.loadWifiList();
      setWifiNetworks(networks);
    } catch (error) {
      Alert.alert("Error", "Failed to scan Wi-Fi networks.");
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.InfoContainer}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", paddingBottom:20 }}>
            ENTER DETAILS
          </Text>
          <TextInput
            placeholder="Enter Farm Id"
            placeholderTextColor={"black"}
            value={inputValues.FarmId}
            onChangeText={(value) => handleInput("FarmId", value)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Enter Farm Name"
            placeholderTextColor={"black"}
            value={inputValues.FarmName}
            onChangeText={(value) => handleInput("FarmName", value)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Enter Farm Location"
            placeholderTextColor={"black"}
            value={inputValues.FarmLocation}
            onChangeText={(value) => handleInput("FarmLocation", value)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Enter Pump Code"
            placeholderTextColor={"black"}
            value={inputValues.PumpCode}
            onChangeText={(value) => handleInput("PumpCode", value)}
            style={styles.inputField}
          />

          <TouchableOpacity style={styles.scanButton} onPress={handleWifiScan}>
            <Text style={styles.scanButtonText}>Scan for Wi-Fi</Text>
          </TouchableOpacity>

          {wifiNetworks.length > 0 && (
            <FlatList
              data={wifiNetworks}
              keyExtractor={(item) => item.BSSID}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.networkItem}
                  onPress={() => setSelectedNetwork(item.SSID)}
                >
                  <Text style={styles.networkText}>{item.SSID}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          {selectedNetwork && (
            <Text style={styles.selectedNetworkText}>
              Selected Network: {selectedNetwork}
            </Text>
          )}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  InfoContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputField: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 30,
    padding: 2,
    width: "100%",
    color: "black",
  },
  scanButton: {
    backgroundColor: "#008B38",
    padding: 10,
    
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  scanButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  networkItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  networkText: {
    color: "black",
    fontSize: 14,
  },
  selectedNetworkText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
});

export default PumpInputModal;
