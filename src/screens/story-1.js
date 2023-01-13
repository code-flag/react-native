import react from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";
const story = [];

const StoryScreen = () => {
    return (
        <View>
            <List.Item title="First Item" description="" left={() => <AppAvatar uri={car} style={styles.avatar}/>} />
        </View>
    )
}