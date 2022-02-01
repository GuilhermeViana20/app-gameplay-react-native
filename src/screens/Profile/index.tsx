import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://media-exp1.licdn.com/dms/image/C4E03AQHdZcbgab6ajw/profile-displayphoto-shrink_800_800/0/1626924162840?e=1649289600&v=beta&t=WhUPky5DPwTTFuQUyD4ZT6iUVMnk-8dX_IB0ClbBebU"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá, 
                    </Text>

                    <Text style={styles.username}>
                        Guilherme
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}