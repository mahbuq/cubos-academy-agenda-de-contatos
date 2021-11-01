import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton({ children, color, size, action }) {
   const style = {
      backgroundColor: color,
      width: Number(size) || 475,
      height: 50,
      marginBottom: 8,
   };

   return (
      <Stack spacing={2} direction="row">
         <Button variant="contained" style={style} onClick={action}>
            {children}
         </Button>
      </Stack>
   );
}
