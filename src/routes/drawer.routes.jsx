import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home";
import Sobrenos from "../screens/Sobrenos";
import Forum from "../screens/Forum";
import Colaboradores from "../screens/Colaboradores";
import Cadastro from "../screens/Cadastro";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobrenos" component={Sobrenos} />
      <Drawer.Screen name="Forum" component={Forum} />
      <Drawer.Screen name="Colaboradores" component={Colaboradores} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
