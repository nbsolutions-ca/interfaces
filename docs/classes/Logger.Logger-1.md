[@nbsolutions/logger - v0.0.0](../README.md) / [Exports](../modules.md) / [Logger](../modules/Logger.md) / Logger

# Class: Logger

[Logger](../modules/Logger.md).Logger

## Table of contents

### Constructors

- [constructor](Logger.Logger-1.md#constructor)

### Methods

- [\_getColorForComponent](Logger.Logger-1.md#_getcolorforcomponent)
- [\_getColorForLevel](Logger.Logger-1.md#_getcolorforlevel)
- [\_print](Logger.Logger-1.md#_print)
- [deprecate](Logger.Logger-1.md#deprecate)
- [deprecateParameterType](Logger.Logger-1.md#deprecateparametertype)
- [enableDebugLog](Logger.Logger-1.md#enabledebuglog)
- [enableVerboseLog](Logger.Logger-1.md#enableverboselog)
- [log](Logger.Logger-1.md#log)

## Constructors

### constructor

• **new Logger**(`component?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `component` | `string` | `'Generic'` |

#### Defined in

[Logger.ts:9](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L9)

## Methods

### \_getColorForComponent

▸ `Protected` **_getColorForComponent**(): `string`

#### Returns

`string`

#### Defined in

[Logger.ts:39](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L39)

___

### \_getColorForLevel

▸ `Protected` **_getColorForLevel**(`level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |

#### Returns

`string`

#### Defined in

[Logger.ts:27](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L27)

___

### \_print

▸ `Protected` **_print**(`message`, `componentStyle`, `levelStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `componentStyle` | `string` |
| `levelStyle` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:23](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L23)

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

[Logger.ts:84](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L84)

___

### deprecateParameterType

▸ **deprecateParameterType**(`component`, `argumentLocation`, `deprecatedType`, `alternative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `argumentLocation` | `number` |
| `deprecatedType` | `string` |
| `alternative?` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:104](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L104)

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

[Logger.ts:15](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L15)

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

[Logger.ts:19](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L19)

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

[Logger.ts:43](https://github.com/nbsolutions-ca/logger/blob/master/src/Logger.ts#L43)
