import {useMemo} from "react";

export const useSortedPosts = (devices, sort) => {
    const sortedDevices = useMemo(() => {
        if (sort) {
            return [...devices].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return devices;
    }, [sort, devices])
    return sortedDevices;
}

export const useDevices = (devices, sort, query) => {
    const sortedDevices = useSortedPosts(devices, sort);

    const sortedAndSearchedDevices = useMemo(() => {
        return sortedDevices.filter(device => device.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedDevices])
    return sortedAndSearchedDevices;
}