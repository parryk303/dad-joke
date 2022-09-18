import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Data from '../jokes.json';
import { useState } from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export default function Test() {
  const [jokes, setJokes] = useState(Data.map(joke => JSON.parse(joke)));
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
        {jokes.map((joke, i) => (
          <Text>
            setup: {joke.setup} | punchline: {joke.punchline}
          </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
};