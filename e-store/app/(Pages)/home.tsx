import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import StorePage from "./StorePage";
import CatalogPage from "./CatalogPage";
import StoreFooter from "../../components/StoreFooter";

function Store() {
    const [currentPage, setCurrentPage] = useState("store");

    return (
        <View style={styles.container}>
            <NavigationBar setCurrentPage={setCurrentPage} />
            {currentPage === "store" ? (
                <View style={styles.storeContainer}>
                    <StorePage />
                </View>
            ) : (
                <View style={styles.storeContainer}>
                    <CatalogPage />
                </View>
            )}
            <StoreFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F9E3C2',
        overflowY: 'scroll',
    },
    storeContainer: {
        width: "80%",
        height: "100%",
    },
});

export default Store;