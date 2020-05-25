import React from "react";
import { Text, Button } from "react-native";

import { Container } from "./styles";
import { useAuth } from "./../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Button onPress={signOut} title="Sair" />
    </Container>
  );
};

export default Dashboard;
