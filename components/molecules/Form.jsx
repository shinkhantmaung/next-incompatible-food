import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Autocomplete, Button, FormControl, FormHelperText } from '@mui/joy';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function Form({ data }) {
  const [selectedFoods, setSelectedFoods] = useState([null, null]); // State for selected foods
  const [showHelperMessages, setShowHelperMessages] = useState(false); // State for displaying helper
  const router = useRouter(); // Access the router

  const handleClick = () => {
    if (!selectedFoods.every(Boolean)) { // Check if all foods are selected
      setShowHelperMessages(true); // Show helper messages if missing selections
      return;
    }

    router.replace(`/result/${selectedFoods[0]}/${selectedFoods[1]}`); // Redirect to result page with selected foods
  };

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <FormControl key={index} sx={{ alignSelf: 'stretch', mt: index === 0 ? 2 : 0 }}>
          <Autocomplete
            size="lg"
            placeholder={`Food ${index + 1}`}
            options={data?.foods}
            onChange={(event, value) => setSelectedFoods((prev) => [...prev.slice(0, index), value?.label, ...prev.slice(index + 1)])}
          />
          {showHelperMessages && (
            <FormHelperText error={true}>
              {selectedFoods[index] ? '' : 'ကျေးဇူးပြု၍ တစ်ခုခုရွေးချယ်ပေးပါ။'}
            </FormHelperText>
          )}
        </FormControl>
      ))}

      <Button
        size="lg"
        color="success"
        endDecorator={<ArrowForward />}
        sx={{ alignSelf: 'stretch' }}
        onClick={handleClick}
      >
        ရှာဖွေမည်။
      </Button>
    </>
  );
}