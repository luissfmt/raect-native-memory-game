import React from "react";

import { SafeAreaView, View } from "react-native";
import { Option } from "../../components/Option";
import { WinnerInfo } from "../../components/WinnerInfo";
import { duplicateArrayElements, fruits as options, randomizeArrayElements } from "../../utils/constants";
import { styles } from "./styles";

export function Main() {
  const [selectedOptions, setSelectedOptions] = React.useState<String[]>([]);
  const [foundOptions, setFoundOptions] = React.useState<String[]>([]);
  const [winner, setWinner] = React.useState<Boolean>(false);
  
  const randomizedOptions = React.useMemo(() => randomizeArrayElements(duplicateArrayElements(options)), [winner]);

  const checkSelectedOptions = () => {
    const hasTwoSelections = selectedOptions.length === 2;

    if (!hasTwoSelections) return;

    const selectedOptionsName = selectedOptions.map(option => option.replace(/[0-9]/g, ''));
    const [first, second] = selectedOptionsName;

    if (first === second) {
      setFoundOptions(prev => [...prev, first]);
      setSelectedOptions([]);
    } else 
      setTimeout(() => setSelectedOptions([]), 1000);
  };

  const handlePlayAgainClick = () => {
    setSelectedOptions([]);
    setFoundOptions([]);
    setWinner(false);
  };

  // it would be better if options could be checked right after user's click response
  React.useEffect(() => {
    checkSelectedOptions();
  }, [selectedOptions]);

  React.useEffect(() => {
    const isFinished = foundOptions.length === options.length;

    if (isFinished)
     setWinner(true);
  }, [foundOptions]);

  return (
    <SafeAreaView 
      style={styles.safeArea} 
      accessibilityLabel='Memory game, select an option to start'
    >
      <View style={styles.container}>
        {randomizedOptions.map((label, index) => {
          const optionKey = label + index;

          return (
            <Option
              key={optionKey}
              label={label} 
              index={index} 
              foundOptions={foundOptions}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          );
        })}

        { winner && <WinnerInfo message="Congrats, you've won!" handlePlayAgainClick={handlePlayAgainClick} /> }
      </View>
    </SafeAreaView>
  );
}