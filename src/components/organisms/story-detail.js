import { Image, Text, View } from "react-native";
import VideoLoader from "../atoms/process-video";
import ProgressBar from "../atoms/progress-bar";

const Story = (props) => {
  switch (props.type.toLowerCase()) {
    case 'image': return (<Image source={source} />);
      break;
    case 'video': return (<VideoLoader source={props.source} />)
      break;
    case 'text': return (<Text> {props.source} </Text>)
      break;
    default:
      break;
  }
};

const ShowProgressBar = ({len}) => {
    for (let i = 0; i < len; i++) {
        return (
            <ProgressBar key={i} val={0} />
        )        
    }
}

const SelectProgressBar = ({keyId}) => {

}

/**
 * Handles display of user story
 * @param {*} story - Array of object
 * @returns story
 */
const StoryDetail = ({ story }) => {
  return (
    <View>
      <Image source={{ uri: "#" }} />
      <View>
        <Text>User Name</Text>
        <Text>time</Text>
      </View>
      <View>
        <View>
          {story.map((data) => {
            return (
              <View>
                <View>
                  <Story {...{ type :"video", source:"sdsd"} } />
                </View>
                <ShowProgressBar len={4} />
                <SelectProgressBar keyId={1} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
