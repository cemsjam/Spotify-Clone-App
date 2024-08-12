"use client";
import React from "react";
import { Header } from "./header";
import MobileHeader from "./mobile-header";
import useMediaQuery from "@/hooks/useMediaQuery";
import { BREAKPOINTS_UP } from "@/constants/breakpoints";

const HeaderContainer = () => {
	const isDesktop = useMediaQuery(BREAKPOINTS_UP.lg);
	return <>{isDesktop ? <Header /> : <MobileHeader />}</>;
};

export default HeaderContainer;
