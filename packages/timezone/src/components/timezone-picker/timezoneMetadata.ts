/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as timezoneMetadataJson from "../../generated/timezoneMetadata.json";

export interface ITimezoneMetadata {
    timezone: string;
    abbreviation?: string;
    offset: number;
    offsetAsString: string;
    population?: number;
}

const ALL_TIMEZONE_METADATA: ITimezoneMetadata[] = timezoneMetadataJson;

const ALL_TIMEZONE_NAMES = ALL_TIMEZONE_METADATA.map(metadata => metadata.timezone);

const TIMEZONE_TO_METADATA = ALL_TIMEZONE_METADATA.reduce<{ [timezone: string]: ITimezoneMetadata }>(
    (store, metadata) => {
        const { timezone } = metadata;
        store[timezone] = metadata;
        return store;
    },
    {},
);

export function getAllTimezoneMetadata(): ITimezoneMetadata[] {
    return ALL_TIMEZONE_METADATA;
}

export function getAllTimezoneNames(): string[] {
    return ALL_TIMEZONE_NAMES;
}

export function getTimezoneMetadata(timezone: string): ITimezoneMetadata | undefined {
    return TIMEZONE_TO_METADATA[timezone];
}
