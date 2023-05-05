import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import i18n from '../services/i18n/i18n';
import { useTranslation } from 'react-i18next';

const initI18n = i18n;

const Home = () => {
    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        isEnabled ? changeLanguage('fr') : changeLanguage('en');
    }, [isEnabled]);

    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setCurrentLanguage(value))
            .catch(err => console.log(err));
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>French</Text>
                <View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#36456e' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled(previousState => !previousState)}
                        value={isEnabled}
                    />
                </View>
            </View>
            <Text style={styles.text}>
                Current Language: {currentLanguage === 'en' ? 'English' : 'French'}
            </Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('hello')}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('goodMorning')}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('intro')}</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#022441',
    },
    textContainer: {
        backgroundColor: '#36456e',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 50,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 40,
    },
});