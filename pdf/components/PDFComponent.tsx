import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    table: {
        display: "flex",
        width: "auto",
        flexDirection: "column",
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
    },
    tableCol: {
        flex: 1, // Distributes the width evenly across all columns
        borderTop: 1,
        borderColor: "#000",
        borderStyle: "solid",
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
    },
    tableHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 600,
    },
});
function PDFComponent({ users }: { users: User[] | undefined }) {
    return (
        <Document>
            <Page size="A3" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableHeader}>
                                    First Name
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableHeader}>
                                    Last Name
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableHeader}>Address</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableHeader}>
                                    Phone NUmber
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableHeader}>Email</Text>
                            </View>
                        </View>
                    </View>
                    {users?.map((user: User) => (
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {user.firstName}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {user.lastName}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {user.address}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {user.mobilePhone}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>
                                    {user.email}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}

export default PDFComponent;
