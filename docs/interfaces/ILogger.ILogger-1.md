[@nbsolutions/interfaces - v0.0.0-alpha.0](../README.md) / [Exports](../modules.md) / [ILogger](../modules/ILogger.md) / ILogger

# Interface: ILogger

[ILogger](../modules/ILogger.md).ILogger

## Table of contents

### Methods

- [debug](ILogger.ILogger-1.md#debug)
- [deprecate](ILogger.ILogger-1.md#deprecate)
- [deprecateParameterType](ILogger.ILogger-1.md#deprecateparametertype)
- [enableDebugLog](ILogger.ILogger-1.md#enabledebuglog)
- [enableVerboseLog](ILogger.ILogger-1.md#enableverboselog)
- [error](ILogger.ILogger-1.md#error)
- [getComponent](ILogger.ILogger-1.md#getcomponent)
- [info](ILogger.ILogger-1.md#info)
- [log](ILogger.ILogger-1.md#log)
- [verbose](ILogger.ILogger-1.md#verbose)
- [warn](ILogger.ILogger-1.md#warn)

## Methods

### debug

▸ **debug**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:11](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L11)

___

### deprecate

▸ **deprecate**(`alternative?`, `methodOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alternative?` | `string` |
| `methodOverride?` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:9](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L9)

___

### deprecateParameterType

▸ **deprecateParameterType**(`argumentLocation`, `deprecatedType`, `alternative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argumentLocation` | `number` |
| `deprecatedType` | `string` |
| `alternative?` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:10](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L10)

___

### enableDebugLog

▸ **enableDebugLog**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Defined in

[ILogger.ts:6](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L6)

___

### enableVerboseLog

▸ **enableVerboseLog**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Defined in

[ILogger.ts:7](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L7)

___

### error

▸ **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:13](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L13)

___

### getComponent

▸ **getComponent**(): `string`

#### Returns

`string`

#### Defined in

[ILogger.ts:5](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L5)

___

### info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:14](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L14)

___

### log

▸ **log**(`level`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:8](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L8)

___

### verbose

▸ **verbose**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:12](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L12)

___

### warn

▸ **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:15](https://github.com/nbsolutions-ca/interfaces/blob/f8eb3ad/src/ILogger.ts#L15)
