[@nbsolutions/interfaces - v0.0.0-alpha.0](../README.md) / [Exports](../modules.md) / [IVersion](../modules/IVersion.md) / IVersion

# Interface: IVersion

[IVersion](../modules/IVersion.md).IVersion

## Hierarchy

- [`INBSObject`](INBSObject.INBSObject-1.md)

- [`IComparable`](IComparable.IComparable-1.md)<[`IVersion`](IVersion.IVersion-1.md)\>

  ↳ **`IVersion`**

## Table of contents

### Methods

- [compare](IVersion.IVersion-1.md#compare)
- [getClassName](IVersion.IVersion-1.md#getclassname)
- [getMajor](IVersion.IVersion-1.md#getmajor)
- [getMinor](IVersion.IVersion-1.md#getminor)
- [getPatch](IVersion.IVersion-1.md#getpatch)
- [getPrereleaseBuild](IVersion.IVersion-1.md#getprereleasebuild)
- [getPrereleaseLabel](IVersion.IVersion-1.md#getprereleaselabel)
- [isPrerelease](IVersion.IVersion-1.md#isprerelease)
- [toString](IVersion.IVersion-1.md#tostring)

## Methods

### compare

▸ **compare**(`value`): [`ComparisonResult`](../enums/ComparisonResult.ComparisonResult-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IVersion`](IVersion.IVersion-1.md) |

#### Returns

[`ComparisonResult`](../enums/ComparisonResult.ComparisonResult-1.md)

#### Inherited from

[IComparable](IComparable.IComparable-1.md).[compare](IComparable.IComparable-1.md#compare)

#### Defined in

[IComparable.ts:5](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IComparable.ts#L5)

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

[INBSObject](INBSObject.INBSObject-1.md).[getClassName](INBSObject.INBSObject-1.md#getclassname)

#### Defined in

[INBSObject.ts:3](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/INBSObject.ts#L3)

___

### getMajor

▸ **getMajor**(): `number`

#### Returns

`number`

#### Defined in

[IVersion.ts:5](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L5)

___

### getMinor

▸ **getMinor**(): `number`

#### Returns

`number`

#### Defined in

[IVersion.ts:6](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L6)

___

### getPatch

▸ **getPatch**(): `number`

#### Returns

`number`

#### Defined in

[IVersion.ts:7](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L7)

___

### getPrereleaseBuild

▸ **getPrereleaseBuild**(): `number`

#### Returns

`number`

#### Defined in

[IVersion.ts:10](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L10)

___

### getPrereleaseLabel

▸ **getPrereleaseLabel**(): `string`

#### Returns

`string`

#### Defined in

[IVersion.ts:9](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L9)

___

### isPrerelease

▸ **isPrerelease**(): `boolean`

#### Returns

`boolean`

#### Defined in

[IVersion.ts:8](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L8)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[IVersion.ts:11](https://github.com/nbsolutions-ca/interfaces/blob/5e5cbad/src/IVersion.ts#L11)
