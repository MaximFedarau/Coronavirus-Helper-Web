import { Box, Center, Spacer, Divider, Icon } from "@chakra-ui/react";
import Link from "next/link";

import {IoLogoGithub} from "react-icons/io5"
import { IoMailOutline } from "react-icons/io5";
import { IoLogoVk } from "react-icons/io5";

export default function Footer() {
    return (
        <Center>
            <Box align="center" opacity={0.4} fontSize="sm" position={"fixed"} bottom="0" textAlign={"center"}>
            <Divider/>
                &copy; {new Date().getFullYear()} Maxim Fedarau. All Rights Reserved.<br/>
                <a href="https://github.com/MaximFedarau" target="_blank">
                <Icon as={IoLogoGithub}/>
                </a>&nbsp;
                <a href="mailto:fedaraumaxim@gmail.com"><Icon as={IoMailOutline}/></a>&nbsp;
                <a href="https://vk.com/id662926312" target="_blank"><Icon as={IoLogoVk}/></a>
            </Box>
        </Center>
    )
}