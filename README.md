# fn-app
Functions powered by fn

## Requirements

## Usage

### Deploying an entire app at once

`fn deploy --all`

### Deploying a single function in the app

`fn deploy func1`

### Protobuf

Generate ruby messages

```
protoc --proto_path=shared/protobuf --ruby_out=func1/messages shared/protobuf/*.proto
```

Generate node messages

```
protoc --proto_path=shared/protobuf --js_out=func2/messages shared/protobuf/*.proto
```