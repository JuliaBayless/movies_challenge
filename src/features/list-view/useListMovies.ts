import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PagingOptions } from "./types";
import { useState } from "react";

export default function useListMovies() {
    const [pagingOptions, setPagingOptions] =
    useState<PagingOptions>({ page: 1 })
}
