# Audio.h (file)

---

> **Note:**
> *Updated on July 12, 2025 at 10:00 AM UTC*

## Overview

Functions to pass in audio data to libprojectM.

**File:** `tests/projectM-4/audio.h`
**Since:** 4.0.0
**Copyright:** 2003-2024 projectM Team

## Description

projectM Milkdrop-esque visualisation SDK Copyright (C) 2003-2024 projectM Team

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA See 'LICENSE.txt' included within this release

## Dependencies

### Includes
- `projectM-4/types.h` (local)

### Included By
- `tests/projectM-4/projectM.h` (local)

### Include Dependency Graph
```
audio.h
├── projectM-4/types.h
    ├── projectM-4/projectM_export.h
    ├── stdbool.h
    ├── stddef.h
    └── stdint.h
```

## Functions

### projectm_pcm_get_max_samples()

```c
__declspec(dllimport) unsigned int projectm_pcm_get_max_samples()
```

Returns the maximum number of audio samples that can be stored.

Each PCM data UpdateMeshSize should not exceed this number of samples. If more samples are added, only this number of samples is stored and the remainder discarded.

**Returns:** The number of audio samples that are stored, per channel.
**Since:** 4.0.0

## Variables

### samples
```c
const float * samples
```
**Location:** Line 62, Column 28
**Type:** `const float *`
**Definition:** `const uint8_t * samples`

### count
```c
const float unsigned int count
```
**Location:** Line 63, Column 58
**Type:** `const float unsigned int`
**Definition:** `const uint8_t unsigned int count`

**Referenced by:**
- `projectm_playlist_add_presets`
- `projectm_playlist_get_filter`
- `projectm_playlist_insert_presets`
- `projectm_playlist_items`
- `projectm_playlist_remove_presets`
- `projectm_playlist_set_filter`
- `projectm_playlist_sort`
- `projectm_set_texture_search_paths`

### channels
```c
const float unsigned int projectm_channels channels
```
**Location:** Line 63, Column 82
**Type:** `const float unsigned int`
**Definition:** `const uint8_t unsigned int projectm_channels channels`

## Additional Function Information

The documentation contains extensive information about audio processing functions including:

- **projectm_pcm_add_float()** - Adds 32-bit floating-point audio samples
- **projectm_pcm_add_int16()** - Adds 16-bit integer audio samples
- **projectm_pcm_add_uint8()** - Adds 8-bit unsigned integer audio samples

### Audio Sample Processing

This function is used to add new audio data to projectM's internal audio buffer. It is internally converted to 2-channel float data, duplicating the channel if mono input is provided.

**Channel Format:** If stereo, the channel order in samples is LRLRLR.

**Parameters:**
- `instance` - The projectM instance handle
- `samples` - An array of PCM samples (expected to be within range -1 to 1 for float)
- `count` - The number of audio samples in a channel
- `channels` - Channel configuration (PROJECTM_MONO, PROJECTM_STEREO, or numerical count)

**Since:** 4.0.0

## License

This library is distributed under the GNU Lesser General Public License version 2.1 or later. See the included LICENSE.txt file for complete license terms.

## API Integration

This header is part of the projectM 4.0.0 API and provides the core audio input functionality for the visualization library. It supports multiple audio formats and automatically handles channel conversion for optimal processing.
