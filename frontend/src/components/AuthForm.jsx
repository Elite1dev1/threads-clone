import { Button, FormControl, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";

const AuthForm = ({ onSubmit, isLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const showToast = useShowToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      showToast("Error", "Please fill all fields", "error");
      return;
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <Input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </FormControl>
        <Button type="submit" width="100%">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </VStack>
    </form>
  );
};

export default AuthForm; 