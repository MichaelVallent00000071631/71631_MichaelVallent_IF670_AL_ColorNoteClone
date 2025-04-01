import { StyleSheet, Text, View, TextInput, Switch, ScrollView, Button} from 'react-native';
import React, { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default';
}

const Input = ({ placeholder, value, onChangeText, keyboardType = 'default' }: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const Checkbox = ({ navigation }) => {
    const [title01, setTitle01] = useState('');
    const [title02, setTitle02] = useState('');
    const [title03, setTitle03] = useState('');
    const [title04, setTitle04] = useState('');
    const [title05, setTitle05] = useState('');
    const [title06, setTitle06] = useState('');
    const [title07, setTitle07] = useState('');
    const [title08, setTitle08] = useState('');
    const [title09, setTitle09] = useState('');
    const [title10, setTitle10] = useState('');
    const [title11, setTitle11] = useState('');
    const [title12, setTitle12] = useState('');
    const [title13, setTitle13] = useState('');
    const [title14, setTitle14] = useState('');
    const [title15, setTitle15] = useState('');
    const [title16, setTitle16] = useState('');
    const [title17, setTitle17] = useState('');
    const [title18, setTitle18] = useState('');
    const [title19, setTitle19] = useState('');
    const [title20, setTitle20] = useState('');
    const [title21, setTitle21] = useState('');
    const [title22, setTitle22] = useState('');
    const [title23, setTitle23] = useState('');
    const [title24, setTitle24] = useState('');
    const [title25, setTitle25] = useState('');
    const [title26, setTitle26] = useState('');
    const [title27, setTitle27] = useState('');
    const [title28, setTitle28] = useState('');
    const [title29, setTitle29] = useState('');
    const [title30, setTitle30] = useState('');
    const [title31, setTitle31] = useState('');
    const [title32, setTitle32] = useState('');
    const [title33, setTitle33] = useState('');
    const [title34, setTitle34] = useState('');
    const [title35, setTitle35] = useState('');
    const [title36, setTitle36] = useState('');
    const [title37, setTitle37] = useState('');
    const [title38, setTitle38] = useState('');
    const [title39, setTitle39] = useState('');
    const [title40, setTitle40] = useState('');
    const [title41, setTitle41] = useState('');
    const [title42, setTitle42] = useState('');
    const [title43, setTitle43] = useState('');
    const [title44, setTitle44] = useState('');
    const [title45, setTitle45] = useState('');
    const [title46, setTitle46] = useState('');
    const [title47, setTitle47] = useState('');
    const [title48, setTitle48] = useState('');
    const [title49, setTitle49] = useState('');
    const [title50, setTitle50] = useState('');
    const [title51, setTitle51] = useState('');
    const [title52, setTitle52] = useState('');
    const [title53, setTitle53] = useState('');
    const [title54, setTitle54] = useState('');
    const [title55, setTitle55] = useState('');
    const [title56, setTitle56] = useState('');
    const [title57, setTitle57] = useState('');
    const [title58, setTitle58] = useState('');
    const [title59, setTitle59] = useState('');
    const [title60, setTitle60] = useState('');
    const [title61, setTitle61] = useState('');
    const [title62, setTitle62] = useState('');
    const [title63, setTitle63] = useState('');
    const [title64, setTitle64] = useState('');
    const [title65, setTitle65] = useState('');
    const [title66, setTitle66] = useState('');
    const [title67, setTitle67] = useState('');
    const [title68, setTitle68] = useState('');
    const [title69, setTitle69] = useState('');
    const [title70, setTitle70] = useState('');
    const [title71, setTitle71] = useState('');
    const [title72, setTitle72] = useState('');
    const [title73, setTitle73] = useState('');
    const [title74, setTitle74] = useState('');
    const [title75, setTitle75] = useState('');
    const [title76, setTitle76] = useState('');
    const [title77, setTitle77] = useState('');
    const [title78, setTitle78] = useState('');
    const [title79, setTitle79] = useState('');
    const [title80, setTitle80] = useState('');
    const [title81, setTitle81] = useState('');
    const [title82, setTitle82] = useState('');
    const [title83, setTitle83] = useState('');
    const [title84, setTitle84] = useState('');
    const [title85, setTitle85] = useState('');
    const [title86, setTitle86] = useState('');
    const [title87, setTitle87] = useState('');
    const [title88, setTitle88] = useState('');
    const [title89, setTitle89] = useState('');
    const [title90, setTitle90] = useState('');
    const [title91, setTitle91] = useState('');
    const [title92, setTitle92] = useState('');
    const [title93, setTitle93] = useState('');
    const [title94, setTitle94] = useState('');
    const [title95, setTitle95] = useState('');
    const [title96, setTitle96] = useState('');
    const [title97, setTitle97] = useState('');
    const [title98, setTitle98] = useState('');
    const [title99, setTitle99] = useState('');

    const [isChecked01, setIsChecked01] = useState(false);
    const [isChecked02, setIsChecked02] = useState(false);
    const [isChecked03, setIsChecked03] = useState(false);
    const [isChecked04, setIsChecked04] = useState(false);
    const [isChecked05, setIsChecked05] = useState(false);
    const [isChecked06, setIsChecked06] = useState(false);
    const [isChecked07, setIsChecked07] = useState(false);
    const [isChecked08, setIsChecked08] = useState(false);
    const [isChecked09, setIsChecked09] = useState(false);
    const [isChecked10, setIsChecked10] = useState(false);
    const [isChecked11, setIsChecked11] = useState(false);
    const [isChecked12, setIsChecked12] = useState(false);
    const [isChecked13, setIsChecked13] = useState(false);
    const [isChecked14, setIsChecked14] = useState(false);
    const [isChecked15, setIsChecked15] = useState(false);
    const [isChecked16, setIsChecked16] = useState(false);
    const [isChecked17, setIsChecked17] = useState(false);
    const [isChecked18, setIsChecked18] = useState(false);
    const [isChecked19, setIsChecked19] = useState(false);
    const [isChecked20, setIsChecked20] = useState(false);
    const [isChecked21, setIsChecked21] = useState(false);
    const [isChecked22, setIsChecked22] = useState(false);
    const [isChecked23, setIsChecked23] = useState(false);
    const [isChecked24, setIsChecked24] = useState(false);
    const [isChecked25, setIsChecked25] = useState(false);
    const [isChecked26, setIsChecked26] = useState(false);
    const [isChecked27, setIsChecked27] = useState(false);
    const [isChecked28, setIsChecked28] = useState(false);
    const [isChecked29, setIsChecked29] = useState(false);
    const [isChecked30, setIsChecked30] = useState(false);
    const [isChecked31, setIsChecked31] = useState(false);
    const [isChecked32, setIsChecked32] = useState(false);
    const [isChecked33, setIsChecked33] = useState(false);
    const [isChecked34, setIsChecked34] = useState(false);
    const [isChecked35, setIsChecked35] = useState(false);
    const [isChecked36, setIsChecked36] = useState(false);
    const [isChecked37, setIsChecked37] = useState(false);
    const [isChecked38, setIsChecked38] = useState(false);
    const [isChecked39, setIsChecked39] = useState(false);
    const [isChecked40, setIsChecked40] = useState(false);
    const [isChecked41, setIsChecked41] = useState(false);
    const [isChecked42, setIsChecked42] = useState(false);
    const [isChecked43, setIsChecked43] = useState(false);
    const [isChecked44, setIsChecked44] = useState(false);
    const [isChecked45, setIsChecked45] = useState(false);
    const [isChecked46, setIsChecked46] = useState(false);
    const [isChecked47, setIsChecked47] = useState(false);
    const [isChecked48, setIsChecked48] = useState(false);
    const [isChecked49, setIsChecked49] = useState(false);
    const [isChecked50, setIsChecked50] = useState(false);
    const [isChecked51, setIsChecked51] = useState(false);
    const [isChecked52, setIsChecked52] = useState(false);
    const [isChecked53, setIsChecked53] = useState(false);
    const [isChecked54, setIsChecked54] = useState(false);
    const [isChecked55, setIsChecked55] = useState(false);
    const [isChecked56, setIsChecked56] = useState(false);
    const [isChecked57, setIsChecked57] = useState(false);
    const [isChecked58, setIsChecked58] = useState(false);
    const [isChecked59, setIsChecked59] = useState(false);
    const [isChecked60, setIsChecked60] = useState(false);
    const [isChecked61, setIsChecked61] = useState(false);
    const [isChecked62, setIsChecked62] = useState(false);
    const [isChecked63, setIsChecked63] = useState(false);
    const [isChecked64, setIsChecked64] = useState(false);
    const [isChecked65, setIsChecked65] = useState(false);
    const [isChecked66, setIsChecked66] = useState(false);
    const [isChecked67, setIsChecked67] = useState(false);
    const [isChecked68, setIsChecked68] = useState(false);
    const [isChecked69, setIsChecked69] = useState(false);
    const [isChecked70, setIsChecked70] = useState(false);
    const [isChecked71, setIsChecked71] = useState(false);
    const [isChecked72, setIsChecked72] = useState(false);
    const [isChecked73, setIsChecked73] = useState(false);
    const [isChecked74, setIsChecked74] = useState(false);
    const [isChecked75, setIsChecked75] = useState(false);
    const [isChecked76, setIsChecked76] = useState(false);
    const [isChecked77, setIsChecked77] = useState(false);
    const [isChecked78, setIsChecked78] = useState(false);
    const [isChecked79, setIsChecked79] = useState(false);
    const [isChecked80, setIsChecked80] = useState(false);
    const [isChecked81, setIsChecked81] = useState(false);
    const [isChecked82, setIsChecked82] = useState(false);
    const [isChecked83, setIsChecked83] = useState(false);
    const [isChecked84, setIsChecked84] = useState(false);
    const [isChecked85, setIsChecked85] = useState(false);
    const [isChecked86, setIsChecked86] = useState(false);
    const [isChecked87, setIsChecked87] = useState(false);
    const [isChecked88, setIsChecked88] = useState(false);
    const [isChecked89, setIsChecked89] = useState(false);
    const [isChecked90, setIsChecked90] = useState(false);
    const [isChecked91, setIsChecked91] = useState(false);
    const [isChecked92, setIsChecked92] = useState(false);
    const [isChecked93, setIsChecked93] = useState(false);
    const [isChecked94, setIsChecked94] = useState(false);
    const [isChecked95, setIsChecked95] = useState(false);
    const [isChecked96, setIsChecked96] = useState(false);
    const [isChecked97, setIsChecked97] = useState(false);
    const [isChecked98, setIsChecked98] = useState(false);
    const [isChecked99, setIsChecked99] = useState(false);

    return (
        <>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#ff0000' }}>
                <Switch value={isChecked01} onValueChange={setIsChecked01} />
                <Input label="" placeholder="Input your title" value={title01} onChangeText={setTitle01} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#00ff00' }}>
                <Switch value={isChecked02} onValueChange={setIsChecked02} />
                <Input label="" placeholder="Input your title" value={title02} onChangeText={setTitle02} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#0000ff' }}>
                <Switch value={isChecked03} onValueChange={setIsChecked03} />
                <Input label="" placeholder="Input your title" value={title03} onChangeText={setTitle03} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#00ffff' }}>
                <Switch value={isChecked04} onValueChange={setIsChecked04} />
                <Input label="" placeholder="Input your title" value={title04} onChangeText={setTitle04} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#ff00ff' }}>
                <Switch value={isChecked05} onValueChange={setIsChecked05} />
                <Input label="" placeholder="Input your title" value={title05} onChangeText={setTitle05} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#ffff00' }}>
                <Switch value={isChecked06} onValueChange={setIsChecked06} />
                <Input label="" placeholder="Input your title" value={title06} onChangeText={setTitle06} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#ffffff' }}>
                <Switch value={isChecked07} onValueChange={setIsChecked07} />
                <Input label="" placeholder="Input your title" value={title07} onChangeText={setTitle07} />
            </View>
          </View>
        </ScrollView>
        <Button title="Back" onPress={()=>navigation.navigate("Home")} />
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555555',
    flex: 0,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    color: "white",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  content: {
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  }
});

export default Checkbox;
