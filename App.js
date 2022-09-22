import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 300,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <StatusBar style="auto" />
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <Image source={require("./image/book.png")} />
          </View>
          <View
            style={{
              marginTop: 10,
              marginRight: 20,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5 }}>
              Cung cấp bởi Tiki Trapding
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "red",
                marginTop: 5,
              }}
            >
              141.800 đ
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              141.000 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <FontAwesome name="minus-square" size={24} color="black" />
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>1</Text>
              <FontAwesome
                name="plus-square"
                size={24}
                color="black"
                style={{ marginRight: 60 }}
              />
              <Text style={{ fontWeight: "bold", color: "blue" }}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginRight: 150,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Mã giảm giá đã lưu
          </Text>
          <Text style={{ fontWeight: "bold", color: "blue" }}>Xem tai đây</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 10,
            marginRight: 100,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              borderColor: "black",
              borderWidth: 1,
              width: 160,
              textAlign: "center",
            }}
          >
            Mã giảm giá
          </Text>
          <Button title="Áp dụng" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          height: 50,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <Text style={{ fontWeight: "bold", color: "blue", marginRight: 10 }}>
          Nhập tại đây?
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Tạm tính</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "red" }}>
          141.800 đ
        </Text>
      </View>
      <View
        style={{
          marginTop: 200,
          backgroundColor: "#fff",
          height: 138,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#808080" }}>
            Thành tiền
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "red" }}>
            141.800 đ
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <TouchableOpacity style={{
            marginTop:13,
            backgroundColor:'red',
            alignItems:'center',
            height:50,
          }}>
            <Text style={{
              marginTop:10,
              color:'white',
              fontWeight:'bold',
              fontSize:20,
            }}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
});
