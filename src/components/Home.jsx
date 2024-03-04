import { Box, CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default  function Home () {
    const [users, setUsers] = useState(null);
    const [loadingUsers, setLoadingUsers] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user-list')
                setUsers(response.data.users);
            } catch (error) {
              console.error('Erro ao buscar', error);
            } finally {
                setLoadingUsers(false)
            }
        };
      
        fetchUsers(); 
    }, [setUsers]);

    if ( loadingUsers) {
        return <CircularProgress />;
    } else return (
        <>
          <Box
          id="dados"
          sx={{
            py: 6,
          }}
        >
          <Container>
            <Typography variant="h3" sx={{ color: 'var(--secondary)', fontFamily: 'Poppins', textAlign: 'center' }}>Users</Typography>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)', fontFamily: 'Poppins' }}>
                    <th style={{ padding: '8px', border: '1px solid var(--secondary)' }}>Name</th>
                    <th style={{ padding: '8px', border: '1px solid var(--secondary)' }}>Email</th>
                    <th style={{ padding: '8px', border: '1px solid var(--secondary)' }}>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id} style={{ fontFamily: 'Poppins', color:'var(--secondary)' }}>
                      <td style={{ padding: '8px', border: '1px solid var(--secondary)' }}>{user.name}</td>
                      <td style={{ padding: '8px', border: '1px solid var(--secondary)' }}>{user.email}</td>
                      <td style={{ padding: '8px', border: '1px solid var(--secondary)' }}>{user.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Box>
        </>
    );
}