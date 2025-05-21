"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "./ui/breadcrumb";

const BreadcrumbSeparator = () => <span className="mx-2 text-gray-500">/</span>;

const CustomBreadcrumb = ({title}) => {
    const pathname = usePathname();
    const paths = pathname.split("/").filter((path) => path);

    return (
        <div className="h-[100px] flex items-center justify-center flex-col bg-gray-50">
            <h1 className=" text-[20px] font-[600]">{ title || 'Become an Instructor'}</h1>
            <Breadcrumb className="mt-2 !text-[16px]">
                <BreadcrumbList className="!gap-0">
                    <BreadcrumbItem >
                        <BreadcrumbLink as={Link} href="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {paths.length > 0 && <BreadcrumbSeparator />}

                    {paths.map((path, index) => {
                        const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
                        const isLast = index === paths.length - 1;

                        return (
                            <React.Fragment key={fullPath}>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage>{decodeURIComponent(path)}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink as={Link} href={fullPath}>
                                            {decodeURIComponent(path)}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {!isLast && <BreadcrumbSeparator />}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default CustomBreadcrumb;
