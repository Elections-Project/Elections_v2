import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import logoJOR from '../assets/images/logoJOR.png'

const navigation = [
    { name: 'الرئيسية', href: '/' },
    {
        name: 'الخدمات',
        href: '#',
        subItems: [
            { name: 'خدمة 1', href: '/service1' },
            { name: 'خدمة 2', href: '/service2' },
            { name: 'خدمة 3', href: '/service3' },
        ]
    },
    { name: 'صوت الآن', href: '/voting' },
    { name: 'تواصل معنا', href: '/contactUs' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [notifications, setNotifications] = useState([]); // You can populate this with actual notifications

    return (
        <Disclosure as="nav" className="bg-[#6E0B00]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src={logoJOR}
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 pr-5">
                                        {navigation.map((item) => (
                                            item.subItems ? (
                                                <Menu as="div" className="relative" key={item.name}>
                                                    <MenuButton
                                                        className={classNames(
                                                            currentPath.startsWith(item.href) ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium inline-flex items-center'
                                                        )}
                                                    >
                                                        {item.name}
                                                        <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                                                    </MenuButton>
                                                    <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {item.subItems.map((subItem) => (
                                                            <MenuItem key={subItem.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={subItem.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {subItem.name}
                                                                    </a>
                                                                )}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuItems>
                                                </Menu>
                                            ) : (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    aria-current={currentPath === item.href ? 'page' : undefined}
                                                    className={classNames(
                                                        currentPath === item.href ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton
                                            className="relative rounded-full bg-[#6E0B00] p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6E0B00]"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </MenuButton>
                                    </div>
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {notifications.length > 0 ? (
                                            notifications.map((notification, index) => (
                                                <MenuItem key={index}>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {notification}
                                                        </a>
                                                    )}
                                                </MenuItem>
                                            ))
                                        ) : (
                                            <div className="px-4 py-2 text-sm text-gray-700">
                                                No notifications
                                            </div>
                                        )}
                                    </MenuItems>
                                </Menu>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-[#6E0B00] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6E0B00]">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                className="h-8 w-8 rounded-full"
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <MenuItem>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Your Profile
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Sign out
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                item.subItems ? (
                                    <Disclosure as="div" className="space-y-1" key={item.name}>
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton
                                                    className={classNames(
                                                        currentPath.startsWith(item.href) ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                                                        'block w-full text-left rounded-md px-3 py-2 text-base font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'rotate-180' : '',
                                                            'ml-2 h-5 w-5 inline-block transform'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel className="space-y-1 px-4">
                                                    {item.subItems.map((subItem) => (
                                                        <DisclosureButton
                                                            key={subItem.name}
                                                            as="a"
                                                            href={subItem.href}
                                                            className="block rounded-md py-2 pl-6 pr-3 text-base font-medium text-red-200 hover:bg-red-700 hover:text-white"
                                                        >
                                                            {subItem.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                ) : (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={currentPath === item.href ? 'page' : undefined}
                                        className={classNames(
                                            currentPath === item.href ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                )
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}