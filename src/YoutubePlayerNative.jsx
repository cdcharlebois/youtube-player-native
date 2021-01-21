/* global YouTube */
import { Component, createElement } from "react";
import { Text, View } from "react-native";
import YouTube from "react-native-youtube";

export const YoutubePlayerNative = ({ videoId, apiKey, autoStart, loop, height }) => {
    return videoId.status === "available" && apiKey.status === "available" ? (
        <View>
            <YouTube
                videoId={videoId.value}
                apiKey={apiKey.value}
                style={{ alignSelf: "stretch", height: height }}
                play={autoStart}
                loop={loop}
            />
        </View>
    ) : (
        <View>
            <Text>Loading...</Text>
        </View>
    );
};
YoutubePlayerNative.displayName = "YoutubePlayerNative";
