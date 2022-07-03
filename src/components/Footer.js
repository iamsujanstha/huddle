import React from "react";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return(
        <StyledFooter>
            <div>
                <img src="./images/logo_white.svg" alt="" />
            </div>
            <Flex>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </Flex>
            <p>@copy: 2021 Huddle. All rights reserved</p>
            {/* </div> */}
        </StyledFooter>
    )
}