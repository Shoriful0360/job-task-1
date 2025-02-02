import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";



const Home = () => {
const{data}=useContext(AuthContext)
console.log(data)
 
    return (
        <div>
            <h1 className="text-center mt-10 text-xl font-bold underline">All Data</h1>
         <TableContainer
      component={Paper}
      sx={{
        width: { xs: "100%", md: "50%" },
        margin: "auto",
        mt: 10
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Home;