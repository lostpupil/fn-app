# fn-app
functions powered by fn

## Requirements

## Usage

### Deploying an entire app at once

`fn deploy --all`

### Deploying a single function in the app

`fn deploy hello`

### Protobuf

```
protoc --proto_path=shared/protobuf --ruby_out=func1/messages shared/protobuf/*.proto
```